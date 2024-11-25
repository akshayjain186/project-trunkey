const leadempolyeeModel = require('../model/leadempolyeeModel');

// Create Lead
const createLead = async (req, res) => {
  try {
    const {
      name,
      surname,
      email,
      address,
      city,
      postalCode,
      mobilePhone,
      typeOfHome,
      leadSource,
      comment,
    } = req.body;

    // Validate required fields
    if (!name || !surname || !email || !leadSource) {
      return res.status(400).json({
        message: 'Name, surname, email, and leadSource are required.',
      });
    }

    // Check if the mobilePhone already exists in the database
    const existingLeadWithPhone = await leadempolyeeModel.findOne({
      where: { mobilePhone },
    });

    if (existingLeadWithPhone) {
      return res.status(409).json({
        message: 'A lead with this mobile phone number already exists.',
      });
    }

    const newLead = await leadempolyeeModel.create({
      name,
      surname,
      email,
      address,
      city,
      postalCode,
      mobilePhone,
      typeOfHome,
      leadSource,
      comment,
    });

    return res.status(201).json({
      message: 'Lead created successfully.',
      data: newLead,
    });
  } catch (error) {
    console.error('Error creating lead:', error);

    // Handle duplicate entry error for email
    if (error.name === 'SequelizeUniqueConstraintError' || error.message.includes('Duplicate entry')) {
      return res.status(409).json({
        message: 'A lead with this email already exists.',
      });
    }

    return res.status(500).json({
      message: 'Internal server error.',
      error: error.message,
    });
  }
};



// Update Lead
const updateLead = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      surname,
      email,
      address,
      city,
      postalCode,
      mobilePhone,
      typeOfHome,
      leadSource,
      comment,
    } = req.body;

    const lead = await leadempolyeeModel.findByPk(id); 

    if (!lead) {
      return res.status(404).json({
        message: 'Lead not found.',
      });
    }

    lead.name = name || lead.name;
    lead.surname = surname || lead.surname;
    lead.email = email || lead.email;
    lead.address = address || lead.address;
    lead.city = city || lead.city;
    lead.postalCode = postalCode || lead.postalCode;
    lead.mobilePhone = mobilePhone || lead.mobilePhone;
    lead.typeOfHome = typeOfHome || lead.typeOfHome;
    lead.leadSource = leadSource || lead.leadSource;
    lead.comment = comment || lead.comment;

    await lead.save();

    return res.status(200).json({
      message: 'Lead updated successfully.',
      data: lead,
    });
  } catch (error) {
    console.error('Error updating lead:', error);
    return res.status(500).json({
      message: 'Internal server error.',
      error: error.message,
    });
  }
};

const getLeadById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the lead by ID
    const lead = await leadempolyeeModel.findByPk(id); // Use `findById` if you're using Mongoose

    if (!lead) {
      return res.status(404).json({
        message: 'Lead not found.',
      });
    }

    return res.status(200).json({
      message: 'Lead retrieved successfully.',
      data: lead,
    });
  } catch (error) {
    console.error('Error retrieving lead:', error);
    return res.status(500).json({
      message: 'Internal server error.',
      error: error.message,
    });
  }
};

const deleteLead = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID of the lead to be deleted

    // Check if the lead exists
    const lead = await leadempolyeeModel.findByPk(id);

    if (!lead) {
      return res.status(404).json({
        message: 'Lead not found.',
      });
    }

    // Delete the lead
    await leadempolyeeModel.destroy({
      where: { id },
    });

    return res.status(200).json({
      message: 'Lead deleted successfully.',
    });
  } catch (error) {
    console.error('Error deleting lead:', error);
    return res.status(500).json({
      message: 'Internal server error.',
      error: error.message,
    });
  }
};

const getAllLeads = async (req, res) => {
  try {
    const leads = await leadempolyeeModel.findAll();

    if (!leads) {
      return res.status(500).json({
        message: 'No leads found or error while querying the database.',
      });
    }

    if (leads.length === 0) {
      return res.status(404).json({
        message: 'No leads found.',
      });
    }

    return res.status(200).json({
      message: 'Leads retrieved successfully.',
      data: leads,
    });
  } catch (error) {
    console.error('Error retrieving leads:', error);
    return res.status(500).json({
      message: 'Internal server error.',
      error: error.message,
    });
  }
};



module.exports = { createLead, updateLead, getLeadById, deleteLead, getAllLeads};
