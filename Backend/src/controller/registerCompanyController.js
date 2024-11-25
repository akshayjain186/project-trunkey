const RegisterCompany = require('../model/registerCompanyModel');
const Category = require('../model/categoryModel');
const ProjectManagementRole = require('../model/projectmanagementRole');
const Roll = require('../model/role');
const User = require('../model/User');
const { Sequelize } = require('sequelize');

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
      projectManagementRollId,
      continent,
      country,
      language,
      currency,
      users,
      roleId,
      postalcode,
    } = req.body;

    // Ensure users are provided and valid
    if (!users || !Array.isArray(users) || users.length === 0) {
      return res.status(400).json({
        error: 'At least one user is required to create a company.',
      });
    }

    // Validate user fields
    for (const user of users) {
      const {
        managername,
        managersurname,
        email,
        Mobilephone,
        address,
        postalcode,
        roleId,
      } = user;
      if (
        !managername ||
        !managersurname ||
        !email ||
        !Mobilephone ||
        !address ||
        !postalcode ||
        !roleId
      ) {
        return res.status(400).json({
          error:
            'Each user must have complete details (managername, managersurname, email, Mobilephone, address, postalcode, roleId).',
        });
      }
    }

    // Validate company fields
    if (
      !companyName ||
      !organisationNumber ||
      !city ||
      !address ||
      !categoryId ||
      !jobTypes ||
      !employeeCount ||
      !countyCoverage ||
      !projectManagementRollId ||
      !continent ||
      !country ||
      !language ||
      !currency ||
      !roleId ||
      !postalcode
    ) {
      return res.status(400).json({
        error: 'All fields are required.',
      });
    }

    if (
      !Array.isArray(categoryId) ||
      !Array.isArray(projectManagementRollId) ||
      !Array.isArray(jobTypes)
    ) {
      return res.status(400).json({
        error:
          'categoryId, jobTypes, and projectManagementRollId must be arrays.',
      });
    }

    // Validate categoryId: Check if all provided categories are valid
    const validCategories = await Category.findAll({
      attributes: ['id', 'name'],
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
        error: 'None of the provided category IDs are valid.',
      });
    }

    // Validate projectManagementRollId: Check if all provided roles are valid
    const validRoles = await ProjectManagementRole.findAll({
      attributes: ['id', 'name'],
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
        error: 'None of the provided project management role IDs are valid.',
      });
    }

    // Validate roleId
    const validRoll = await Roll.findOne({ where: { id: roleId } });

    if (!validRoll) {
      return res.status(400).json({
        error: 'The provided roleId is invalid.',
      });
    }

    const company = await RegisterCompany.create({
      companyName,
      organisationNumber,
      city,
      address,
      postalcode,
      categoryId: filteredCategoryId,
      jobTypes,
      employeeCount,
      useSubcontractors,
      countyCoverage,
      projectManagementRollId: filteredProjectManagementRollId,
      continent,
      country,
      language,
      currency,
      roleId,
    });

    // Create users
    const createdUsers = [];
    for (const user of users) {
      const {
        managername,
        managersurname,
        email,
        Mobilephone,
        address,
        postalcode,
        roleId,
      } = user;

      try {
        const newUser = new User();
        newUser.set({
          Name: managername,
          Surname: managersurname,
          email,
          Mobilephone,
          address,
          postalcode,
          roleId,
        });

        const savedUser = await newUser.save();
        createdUsers.push(savedUser);
      } catch (error) {
        return res.status(500).json({
          error: 'Error creating user.',
          details: error.errors
            ? error.errors.map((e) => e.message)
            : error.message,
        });
      }
    }

    const response = {
      success: true,
      message: 'Company registered successfully!',
      data: {
        ...company.toJSON(),
        categoryNames: validCategories.map((category) => category.name),
        projectManagementRoleNames: validRoles.map((role) => role.name),
        createdUsers,
      },
    };

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { companyId, users, ...updateFields } = req.body;

    let updatedCompany = null; // Variable to hold updated company details
    let updatedUsers = []; // Array to hold updated user details

    // Update company details if companyId is provided
    if (companyId) {
      const company = await RegisterCompany.findOne({
        where: { id: companyId },
      });

      if (!company) {
        return res.status(404).json({
          error: 'Company not found.',
        });
      }

      // Validate and update specific fields for the company
      if (updateFields.categoryId) {
        if (!Array.isArray(updateFields.categoryId)) {
          return res.status(400).json({
            error: 'categoryId must be an array.',
          });
        }

        const validCategories = await Category.findAll({
          attributes: ['id'],
          where: { id: updateFields.categoryId },
        });

        const validCategoryIds = validCategories.map((category) => category.id);
        updateFields.categoryId = updateFields.categoryId.filter((id) =>
          validCategoryIds.includes(id)
        );

        if (updateFields.categoryId.length === 0) {
          return res.status(400).json({
            error: 'None of the provided category IDs are valid.',
          });
        }
      }

      if (updateFields.projectManagementRollId) {
        if (!Array.isArray(updateFields.projectManagementRollId)) {
          return res.status(400).json({
            error: 'projectManagementRollId must be an array.',
          });
        }

        const validRoles = await ProjectManagementRole.findAll({
          attributes: ['id'],
          where: { id: updateFields.projectManagementRollId },
        });

        const validRoleIds = validRoles.map((role) => role.id);
        updateFields.projectManagementRollId =
          updateFields.projectManagementRollId.filter((id) =>
            validRoleIds.includes(id)
          );

        if (updateFields.projectManagementRollId.length === 0) {
          return res.status(400).json({
            error:
              'None of the provided project management role IDs are valid.',
          });
        }
      }

      if (updateFields.roleId) {
        const validRoll = await Roll.findOne({
          where: { id: updateFields.roleId },
        });

        if (!validRoll) {
          return res.status(400).json({
            error: 'The provided roleId is invalid.',
          });
        }
      }

      updatedCompany = await company.update(updateFields);
    }

    if (users && Array.isArray(users)) {
      for (const user of users) {
        const {
          userId,
          managerName,
          managerSurname,
          email,
          mobilePhone,
          address,
          postalcode,
          roleId,
        } = user;

        if (!userId) {
          return res.status(400).json({
            error: 'User ID is required for updating user details.',
          });
        }

        const existingUser = await User.findOne({ where: { id: userId } });

        if (!existingUser) {
          return res.status(404).json({
            error: `User with ID ${userId} not found.`,
          });
        }

        const userUpdateFields = {};

        if (managerName) userUpdateFields.Name = managerName;
        if (managerSurname) userUpdateFields.Surname = managerSurname;
        if (email) userUpdateFields.email = email;
        if (mobilePhone) userUpdateFields.Mobilephone = mobilePhone;
        if (address) userUpdateFields.address = address;
        if (postalcode) userUpdateFields.postalcode = postalcode;
        if (roleId) {
          const validUserRole = await Roll.findOne({ where: { id: roleId } });
          if (!validUserRole) {
            return res.status(400).json({
              error: `Invalid role ID: ${roleId} for user with ID ${userId}.`,
            });
          }
          userUpdateFields.roleId = roleId;
        }

        const updatedUser = await existingUser.update(userUpdateFields);
        updatedUsers.push(updatedUser);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Details updated successfully.',
      data: {
        updatedCompany,
        updatedUsers,
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal Server Error',
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

    const companies = await RegisterCompany.findAll({
      where: Sequelize.where(
        Sequelize.fn(
          'JSON_CONTAINS',
          Sequelize.col('jobTypes'),
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
      message: 'Failed to fetch companies by job type.',
      error: error.message,
    });
  }
};

const getCompanies = async (req, res) => {
  try {
    const { jobTypes } = req.body;

    // If jobTypes is provided, fetch companies with the specified job type
    let companies;
    if (jobTypes) {
      // Fetch companies with the given job type
      companies = await RegisterCompany.findAll({
        where: Sequelize.where(
          Sequelize.fn(
            'JSON_CONTAINS',
            Sequelize.col('jobTypes'),
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
    } else {
      // If no jobTypes are provided, fetch all companies
      companies = await RegisterCompany.findAll();
    }

    // Extract category IDs and role IDs from the companies
    const categoryIds = companies.map((company) => company.categoryId).flat();
    const roleIds = companies
      .map((company) => company.projectManagementRollId)
      .flat();

    // Fetch categories and roles based on extracted IDs
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
      message: jobTypes
        ? `Companies with job type ${jobTypes} fetched successfully!`
        : 'All companies fetched successfully!',
      data: companiesWithDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch companies.',
      error: error.message,
    });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { companyId } = req.params;

    const company = await RegisterCompany.findOne({ where: { id: companyId } });

    if (!company) {
      return res.status(404).json({
        error: 'Company not found.',
      });
    }

    await company.destroy();

    await User.destroy({
      where: { companyId: companyId },
    });

    return res.status(200).json({
      success: true,
      message: 'Company and associated users deleted successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const { companyId } = req.params;
    console.log(`Fetching company with ID: ${companyId}`);

    const company = await RegisterCompany.findOne({
      where: { id: companyId },
    });

    if (!company) {
      return res.status(404).json({
        error: 'Company not found.',
      });
    }

    return res.status(200).json({
      success: true,
      company,
    });
  } catch (error) {
    console.error('Error fetching company:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

module.exports = {
  createCompany,
  updateCompany,
  getCompaniesByJobTypes,
  getCompanies,
  deleteCompany,
  getCompanyById,
};
