const express = require('express');
const { createLead,updateLead, getLeadById, deleteLead, getAllLeads} = require('../controller/leadempolyeeController'); // Import the controller

const router = express.Router();


router.post('/add', createLead);
router.put('/:id', updateLead);
router.get('/:id', getLeadById);
router.delete('/:id', deleteLead);

router.get('/', getAllLeads);

module.exports = router;
