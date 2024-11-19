const express = require('express');
const { createLeadSource } = require('../controller/leadSourceController');

const router = express.Router();

// Route for creating a lead source
router.post('/add', createLeadSource);

module.exports = router;
