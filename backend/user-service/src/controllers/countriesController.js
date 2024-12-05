const Country = require("../models/countriesModel");
const { Op } = require("sequelize");

const getAllCountries = async (req, res) => {
  try {
    const {
      continent
    } = req.query;
    const countries = continent ?
      await Country.findAll({
        where: {
          continent
        }
      }) :
      await Country.findAll();
    if (!countries || countries.length === 0) {
      return res.status(404).json({
        message: "No countries found"
      });
    }
    res.status(200).json({
      message: "Countries fetched successfully",
      countries,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching countries",
      error: error.message,
    });
  }
};

const getCountryById = async (req, res) => {
  try {
    const {
      id
    } = req.params; 
    const country = await Country.findByPk(id);

    if (!country) {
      return res.status(404).json({
        message: "Country not found"
      });
    }
    res.status(200).json({
      message: "Country fetched successfully",
      country,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the country",
      error: error.message,
    });
  }
};

const updateCountryById = async (req, res) => {
  try {
    const {
      id
    } = req.params; 
    const updatedData = req.body;
    const country = await Country.findByPk(id);
    if (!country) {
      return res.status(404).json({
        message: "Country not found"
      });
    }
    await country.update(updatedData);
    res.status(200).json({
      message: "Country updated successfully",
      updatedCountry: country,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the country",
      error: error.message,
    });
  }
};

const deleteCountryById = async (req, res) => {
  try {
    const {
      id
    } = req.params; 
    const country = await Country.findByPk(id);
    if (!country) {
      return res.status(404).json({
        message: "Country not found",
      });
    }
    await country.destroy();
    res.status(200).json({
      message: "Country deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the country",
      error: error.message,
    });
  }
};


const searchCountryByName = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({
        message: "Country name is required for search",
      });
    }
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`, // Use Op.like for MySQL (case-insensitive by default)
        },
      },
    });

    if (!countries || countries.length === 0) {
      return res.status(404).json({
        message: "Country not found",
      });
    }

    res.status(200).json({
      message: "Countries fetched successfully",
      countries,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while searching for the country",
      error: error.message,
    });
  }
};

module.exports = {
  getAllCountries,
  getCountryById,
  updateCountryById,
  deleteCountryById,
  searchCountryByName

};