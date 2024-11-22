const express = require('express');
const router = express.Router();
const registerCompanyController = require('../controller/registerCompanyController');

router.post('/register', registerCompanyController.createCompany);

router.post('/jobTypes', registerCompanyController.getCompaniesByJobTypes);

router.put('/:id', registerCompanyController.updateCompany);

router.get('/:id', registerCompanyController.getCompanyById);

router.get('/', registerCompanyController.getCompanies);

router.delete('/:id', registerCompanyController.deleteCompany);

module.exports = router;
