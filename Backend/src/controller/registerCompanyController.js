const RegisterCompany = require("../model/registerCompanyModel");
const Category = require("../model/categoryModel");
const { Sequelize } = require("sequelize");

const ProjectManagementRole = require("../model/projectmanagementRole");

const createCompany = async (req, res) => {
  try {
    const {
      companyName,
      organisationNumber,
      city,
      address,
      categoryId,
      jobTypes,
      employeeCount,
      useSubcontractors,
      countyCoverage,
      managerName,
      managersurname,
      email,
      mobilePhone,
      projectManagementRollId,
    } = req.body;

    // Validate input fields
    if (
      !companyName ||
      !organisationNumber ||
      !city ||
      !address ||
      !categoryId ||
      !jobTypes ||
      !employeeCount ||
      !countyCoverage ||
      !managerName ||
      !managersurname ||
      !email ||
      !mobilePhone ||
      !projectManagementRollId
    ) {
      return res.status(400).json({
        error: "All fields are required.",
      });
    }

    if (!Array.isArray(categoryId) || !Array.isArray(projectManagementRollId)) {
      return res.status(400).json({
        error: "categoryId and projectManagementRollId must be arrays.",
      });
    }

    // Validate the provided category IDs
    const validCategories = await Category.findAll({
      attributes: ["id", "name"],
      where: {
        id: categoryId,
      },
    });
    const validCategoryIds = validCategories.map((category) => category.id);
    const filteredCategoryId = categoryId.filter((id) =>
      validCategoryIds.includes(id)
    );

    if (filteredCategoryId.length === 0) {
      return res.status(400).json({
        error: "None of the provided category IDs are valid.",
      });
    }

    const validRoles = await ProjectManagementRole.findAll({
      attributes: ["id", "name"],
      where: {
        id: projectManagementRollId,
      },
    });
    const validRoleIds = validRoles.map((role) => role.id);
    const filteredProjectManagementRollId = projectManagementRollId.filter(
      (id) => validRoleIds.includes(id)
    );

    if (filteredProjectManagementRollId.length === 0) {
      return res.status(400).json({
        error: "None of the provided project management role IDs are valid.",
      });
    }

    const company = await RegisterCompany.create({
      companyName,
      organisationNumber,
      city,
      address,
      categoryId: filteredCategoryId,
      jobTypes,
      employeeCount,
      useSubcontractors,
      countyCoverage,
      managerName,
      managersurname,
      email,
      mobilePhone,
      projectManagementRollId: filteredProjectManagementRollId,
    });

    const response = {
      success: true,
      message: "Company registered successfully!",
      data: {
        ...company.toJSON(),
        categoryNames: validCategories.map((category) => category.name),
        projectManagementRoleNames: validRoles.map((role) => role.name),
      },
    };

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const getCompanies = async (req, res) => {
  try {
    const companies = await RegisterCompany.findAll();

    const categoryIds = companies.map((company) => company.categoryId).flat();
    const roleIds = companies
      .map((company) => company.projectManagementRollId)
      .flat();

    const categories = await Category.findAll({
      where: {
        id: categoryIds,
      },
    });

    const roles = await ProjectManagementRole.findAll({
      where: {
        id: roleIds,
      },
    });

    const companiesWithDetails = companies.map((company) => {
      const companyCategories = categories.filter((category) =>
        company.categoryId.includes(category.id)
      );
      const companyRoles = roles.filter((role) =>
        company.projectManagementRollId.includes(role.id)
      );

      return {
        ...company.toJSON(),
        categoryNames: companyCategories.map((cat) => cat.name),
        projectManagementRoleNames: companyRoles.map((role) => role.name),
      };
    });

    return res.status(200).json({
      success: true,
      message: "Companies fetched successfully!",
      data: companiesWithDetails,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;

    const company = await RegisterCompany.findByPk(id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found.",
      });
    }

    const categoryIds = Array.isArray(company.categoryId)
      ? company.categoryId
      : [company.categoryId];
    const roleIds = Array.isArray(company.projectManagementRollId)
      ? company.projectManagementRollId
      : [company.projectManagementRollId];

    const categories = await Category.findAll({
      where: {
        id: categoryIds,
      },
    });

    const roles = await ProjectManagementRole.findAll({
      where: {
        id: roleIds,
      },
    });

    // Map category and role names to the company
    const companyWithDetails = {
      success: true,
      message: "CompanyID fetched successfully!",
      data: {
        ...company.toJSON(),
        categoryNames: categories.map((cat) => cat.name),
        projectManagementRoleNames: roles.map((role) => role.name),
      },
    };

    return res.status(200).json(companyWithDetails);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      companyName,
      organisationNumber,
      city,
      address,
      categoryId,
      jobTypes,
      employeeCount,
      useSubcontractors,
      countyCoverage,
      managerName,
      managersurname,
      email,
      mobilePhone,
      projectManagementRollId,
    } = req.body;

    const company = await RegisterCompany.findByPk(id);

    if (!company) {
      return res.status(404).json({
        error: "Company not found.",
      });
    }

    // Build the update data object conditionally
    const updateData = {};

    if (companyName) updateData.companyName = companyName;
    if (organisationNumber) updateData.organisationNumber = organisationNumber;
    if (city) updateData.city = city;
    if (address) updateData.address = address;
    if (categoryId) {
      if (!Array.isArray(categoryId)) {
        return res.status(400).json({
          error: "categoryId must be an array.",
        });
      }
      const validCategories = await Category.findAll({
        attributes: ["id", "name"],
        where: {
          id: categoryId,
        },
      });
      const validCategoryIds = validCategories.map((category) => category.id);
      const filteredCategoryId = categoryId.filter((id) =>
        validCategoryIds.includes(id)
      );

      if (filteredCategoryId.length === 0) {
        return res.status(400).json({
          error: "None of the provided category IDs are valid.",
        });
      }

      updateData.categoryId = filteredCategoryId;
    }

    if (jobTypes) updateData.jobTypes = jobTypes;
    if (employeeCount) updateData.employeeCount = employeeCount;
    if (useSubcontractors !== undefined)
      updateData.useSubcontractors = useSubcontractors;
    if (countyCoverage) updateData.countyCoverage = countyCoverage;
    if (managerName) updateData.managerName = managerName;
    if (managersurname) updateData.managersurname = managersurname;
    if (email) updateData.email = email;
    if (mobilePhone) updateData.mobilePhone = mobilePhone;
    if (projectManagementRollId) {
      if (!Array.isArray(projectManagementRollId)) {
        return res.status(400).json({
          error: "projectManagementRollId must be an array.",
        });
      }
      const validRoles = await ProjectManagementRole.findAll({
        attributes: ["id", "name"],
        where: {
          id: projectManagementRollId,
        },
      });
      const validRoleIds = validRoles.map((role) => role.id);
      const filteredProjectManagementRollId = projectManagementRollId.filter(
        (id) => validRoleIds.includes(id)
      );

      if (filteredProjectManagementRollId.length === 0) {
        return res.status(400).json({
          error: "None of the provided project management role IDs are valid.",
        });
      }

      updateData.projectManagementRollId = filteredProjectManagementRollId;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        error: "No valid fields to update.",
      });
    }

    await company.update(updateData);

    const updatedCategories =
      updateData.categoryId && updateData.categoryId.length > 0
        ? await Category.findAll({
            where: {
              id: updateData.categoryId,
            },
          })
        : [];

    const updatedRoles =
      updateData.projectManagementRollId &&
      updateData.projectManagementRollId.length > 0
        ? await ProjectManagementRole.findAll({
            where: {
              id: updateData.projectManagementRollId,
            },
          })
        : [];

    const updatedCompanyWithDetails = {
      ...company.toJSON(),
      categoryNames: updatedCategories.map((cat) => cat.name),
      projectManagementRoleNames: updatedRoles.map((role) => role.name),
    };

    return res.status(200).json({
      message: "Company updated successfully.",
      company: updatedCompanyWithDetails,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the company by ID without associations
    const company = await RegisterCompany.findByPk(id);

    if (!company) {
      return res.status(404).json({
        error: "Company not found.",
      });
    }

    await company.destroy();

    return res.status(200).json({
      message: "Company deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const getCompaniesByJobTypes = async (req, res) => {
  try {
    const { jobTypes } = req.body;

    if (!jobTypes) {
      return res.status(400).json({
        success: false,
        message: "Please provide a job type (e.g., 'Big Job' or 'Small Job').",
      });
    }

    // Query to fetch companies by job type using JSON_CONTAINS for MySQL
    const companies = await RegisterCompany.findAll({
      where: Sequelize.where(
        Sequelize.fn(
          "JSON_CONTAINS",
          Sequelize.col("jobTypes"),
          Sequelize.literal(`'["${jobTypes}"]'`)
        ),
        true
      ),
    });

    if (companies.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No companies found with job type: ${jobTypes}`,
      });
    }

    const categoryIds = companies.map((company) => company.categoryId).flat();
    const roleIds = companies
      .map((company) => company.projectManagementRollId)
      .flat();

    const categories = await Category.findAll({
      where: {
        id: categoryIds,
      },
    });

    const roles = await ProjectManagementRole.findAll({
      where: {
        id: roleIds,
      },
    });

    // Attach category and role data to companies manually
    const companiesWithDetails = companies.map((company) => {
      const companyCategories = categories.filter((category) =>
        company.categoryId.includes(category.id)
      );
      const companyRoles = roles.filter((role) =>
        company.projectManagementRollId.includes(role.id)
      );

      return {
        ...company.toJSON(),
        categoryDetails: companyCategories.map((cat) => ({
          id: cat.id,
          name: cat.name,
        })),
        projectManagementRoleDetails: companyRoles.map((role) => ({
          id: role.id,
          name: role.name,
        })),
      };
    });

    return res.status(200).json({
      success: true,
      message: `Companies with job type ${jobTypes}" fetched successfully!`,
      data: companiesWithDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch companies by job type.",
      error: error.message,
    });
  }
};

module.exports = {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
  getCompaniesByJobTypes,
};
