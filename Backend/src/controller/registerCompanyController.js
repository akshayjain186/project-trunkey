const RegisterCompany = require('../model/registerCompanyModel');
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
      managerName,
      managersurname,
      email,
      mobilePhone,
    } = req.body;

    const newCompany = await RegisterCompany.create({
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
    });

    res.status(201).json({
      success: true,
      message: 'Company successfully registered!',
      data: newCompany,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        success: false,
        message: 'Failed to create company',
        error: error.message,
      });
  }
};

const getCompaniesByJobType = async (req, res) => {
  try {
    const { jobType } = req.query;

    if (!jobType) {
      return res.status(400).json({
        success: false,
        message: "Please provide a job type (e.g., 'Big Job' or 'Small Job').",
      });
    }

    const companies = await RegisterCompany.findAll({
      where: Sequelize.literal(`JSON_CONTAINS(jobTypes, '["${jobType}"]')`),
    });

    if (companies.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No companies found with job type "${jobType}".`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Companies with job type "${jobType}" fetched successfully!`,
      data: companies,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch companies by job type.',
      error: error.message,
    });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
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
    } = req.body;

    const company = await RegisterCompany.findByPk(companyId);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: 'Company not found.',
      });
    }

   
    const updatedCompany = await company.update({
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
    });

    res.status(200).json({
      success: true,
      message: 'Company updated successfully!',
      data: updatedCompany,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to update company.',
      error: error.message,
    });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const { companyId } = req.params; 

    
    const company = await RegisterCompany.findByPk(companyId);

    
    if (!company) {
      return res.status(404).json({
        success: false,
        message: `Company with ID ${companyId} not found.`,
      });
    }

    
    res.status(200).json({
      success: true,
      message: 'Company details fetched successfully!',
      data: company,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch company details.',
      error: error.message,
    });
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const companies = await RegisterCompany.findAll(); 

    if (companies.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No companies found.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Companies fetched successfully!',
      data: companies,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch companies.',
      error: error.message,
    });
  }
};

const deleteCompanyById = async (req, res) => {
  try {
    const { id } = req.params; 

    const company = await RegisterCompany.findByPk(id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: `Company with ID ${id} not found.`,
      });
    }

    await company.destroy();

    res.status(200).json({
      success: true,
      message: `Company with ID ${id} has been deleted successfully.`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete company.',
      error: error.message,
    });
  }
};

module.exports = {
  createCompany,
  getCompaniesByJobType,
  updateCompany,
  getCompanyById,
  getAllCompanies,
  deleteCompanyById,
};
