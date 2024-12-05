const { Op } = require('sequelize');
const Continent = require('../models/continentsModel');
const Country = require('../models/countriesModel');
const countriesList = require('countries-list');
const countries = countriesList.countries;

const groupCountriesByContinent = () => {
    const continents = {};
    for (const countryCode in countries) {
      const country = countries[countryCode];
      const continent = country.continent;  
      if (!continents[continent]) {
        continents[continent] = [];
      }
      continents[continent].push(country.name);
    }
      return continents;
  };
  
  const getAllContinents = async (req, res) => {
    try {
      const continents = await Continent.findAll();
        const response = continents.map((continent) => {
        return {
          id: continent.id,
          name: continent.name,
        };
      });
      res.status(200).json({
        message: 'Continents fetched successfully',
        data: response, 
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching continents',
        error: error.message,
      });
    }
  };

const getContinentById = async (req, res) => {
  try {
    const continentId = req.params.id;
    const continent = await Continent.findByPk(continentId);
    if (!continent) {
      return res.status(404).json({ message: 'Continent not found' });
    }
    const countriesForContinent = await getCountriesByContinentId(continentId);
    const groupedCountries = groupCountriesByContinent();
    const countriesForContinentFromPackage = groupedCountries[continent.name] || [];
    res.status(200).json({
      continent: continent.name,
      countries: countriesForContinent.length > 0 ? countriesForContinent : countriesForContinentFromPackage, // Prefer DB countries over package data
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching continent and countries',
      error: error.message,
    });
  }
};

const getCountriesByContinentId = async (continentId) => {
  return await Country.findAll({ where: { continentId } });
};

module.exports = {
  getAllContinents,
  getContinentById,
  getCountriesByContinentId
};
