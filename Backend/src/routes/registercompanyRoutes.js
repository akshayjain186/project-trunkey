const express = require('express');
const router = express.Router();
const registerCompanyController = require('../controller/registerCompanyController');

router.post('/register', registerCompanyController.createCompany);

router.post('/jobTypes', registerCompanyController.getCompaniesByJobTypes);

router.put('/update', registerCompanyController.updateCompany);

router.post('/companies', registerCompanyController.getCompanies);

router.get('/:companyId', registerCompanyController.getCompanyById);

router.delete('/:companyId', registerCompanyController.deleteCompany);

module.exports = router;
