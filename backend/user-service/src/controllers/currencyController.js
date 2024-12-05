const Currency = require('../models/currencyModel'); 

// Get all currencies
const getAllCurrencies = async (req, res) => {
  try {
    const currencies = await Currency.findAll();
    res.status(200).json({
      message: 'Currencies fetched successfully',
      currencies,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching currencies',
      error: error.message,
    });
  }
};

// Get a single currency by its code
const getCurrencyByCode = async (req, res) => {
    try {
      const { currencycode } = req.params;
      const currency = await Currency.findOne({ where: { currencycode } });
  
      if (!currency) {
        return res.status(404).json({ message: 'Currency not found' });
      }
      res.status(200).json({
        message: 'Currency fetched successfully',
        currency,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching currency',
        error: error.message,
      });
    }
  };

  const getCurrencyById = async (req, res) => {
    try {
      const { id } = req.params;       
      const currency = await Currency.findByPk(id);
      if (!currency) {
        return res.status(404).json({ message: 'Currency not found' });
      }
  
      res.status(200).json({
        message: 'Currency fetched successfully',
        currency,
      });
    } catch (error) {
            res.status(500).json({
        message: 'Error fetching currency',
        error: error.message,
      });
    }
  };
  

// Update a currency by its code
const updateCurrency = async (req, res) => {
  try {
    const { currencycode } = req.params;
    const { name } = req.body;
    const currency = await Currency.findOne({ where: { currencycode } });
    if (!currency) {
      return res.status(404).json({ message: 'Currency not found' });
    }

    currency.name = name || currency.name;
    await currency.save();

    res.status(200).json({
      message: 'Currency updated successfully',
      currency,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating currency',
      error: error.message,
    });
  }
};

// Delete a currency by its code
const deleteCurrency = async (req, res) => {
  try {
    const { currencycode } = req.params;
    const currency = await Currency.findOne({ where: { currencycode } });
    if (!currency) {
      return res.status(404).json({ message: 'Currency not found' });
    }

    await currency.destroy();
    res.status(200).json({
      message: 'Currency deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting currency',
      error: error.message,
    });
  }
};



module.exports = {
  getAllCurrencies,
  getCurrencyById,
  getCurrencyByCode,
  updateCurrency,
  deleteCurrency,
};
