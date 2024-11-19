const LeadSource = require('../model/leadSource');

const createLeadSource = async (req, res) => {
  try {
    const { lead_source } = req.body;

    if (!lead_source) {
      return res.status(400).json({ message: "Lead source is required." });
    }

    const newLeadSource = await LeadSource.create({ lead_source });

    return res.status(201).json({
      message: "Lead source created successfully.",
      data: newLeadSource,
    });
  } catch (error) {
    console.error("Error creating lead source:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  createLeadSource,
};
