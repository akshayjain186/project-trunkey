const express = require('express');
const router = express.Router();

const { getAllContinents, getContinentById } = require('../controllers/continentController');

router.get('/', getAllContinents);

router.get('/:id', getContinentById);

module.exports = router;
