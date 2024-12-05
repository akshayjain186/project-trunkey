const express = require('express');
const router = express.Router();
const {
    getAllCurrencies,
    getCurrencyByCode,
    updateCurrency,
    deleteCurrency,
    getCurrencyById
} = require('../controllers/currencyController');

router.get('/fetch', getAllCurrencies);
router.get('/:currencycode', getCurrencyByCode); ///  http://localhost:3002/api/currencies/EUR
router.put('/:currencycode', updateCurrency);
router.get('/currencies/:id', getCurrencyById);
router.delete('/:currencycode', deleteCurrency);

module.exports = router;