const Language = require('../models/languagesModel');
const { Op } = require('sequelize');  

const getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.findAll();
    if (languages.length === 0) {
      return res.status(404).json({
        message: 'No languages found'
      });
    }
    res.status(200).json({
      message: 'Languages fetched successfully',
      languages,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching languages',
      error: error.message,
    });
  }
};

const getLanguageById = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const language = await Language.findByPk(id);

    if (!language) {
      return res.status(404).json({
        message: 'Language not found'
      });
    }
    res.status(200).json({
      message: 'Language fetched successfully',
      language,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching language',
      error: error.message,
    });
  }
};

const updateLanguage = async (req, res) => {
  try {
    const {
      id
    } = req.params; 
    const {
      name,
      code
    } = req.body; 
    const language = await Language.findByPk(id);
    if (!language) {
      return res.status(404).json({
        message: 'Language not found'
      });
    }
    await language.update({
      name,
      code
    });
    res.status(200).json({
      message: 'Language updated successfully',
      language,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating language',
      error: error.message,
    });
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const {
      id
    } = req.params; 
    const language = await Language.findByPk(id);
    if (!language) {
      return res.status(404).json({
        message: 'Language not found'
      });
    }
    await language.destroy();
    res.status(200).json({
      message: 'Language deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting language',
      error: error.message,
    });
  }
};

const searchLanguages = async (req, res) => {
  try {
    const { name, code } = req.query;
    if (!name && !code) {
      return res.status(400).json({
        message: "At least one search parameter (name or code) is required",
      });
    }
    const conditions = {};
    if (name) {
      conditions.name = {
        [Op.like]: `%${name}%`, // Case-insensitive search for name
      };
    }
    if (code) {
      conditions.code = {
        [Op.like]: `%${code}%`, // Case-insensitive search for code
      };
    }
    const languages = await Language.findAll({
      where: conditions,
    });

    if (languages.length === 0) {
      return res.status(404).json({
        message: 'No languages found',
      });
    }

    res.status(200).json({
      message: 'Languages fetched successfully',
      languages,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while searching for languages',
      error: error.message,
    });
  }
};

module.exports = {
  getAllLanguages,
  getLanguageById,
  updateLanguage,
  deleteLanguage,
  searchLanguages
};