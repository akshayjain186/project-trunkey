const express = require('express');
const router = express.Router();
const registerCompanyController = require('../controller/registerCompanyController');

router.post('/register', registerCompanyController.createCompany);

router.post('/jobTypes', registerCompanyController.getCompaniesByJobTypes);

router.put('/:companyId', registerCompanyController.updateCompany);

router.get('/:companyId', registerCompanyController.getCompanyById);

router.get('/', registerCompanyController.getAllCompanies);

router.delete('/:id', registerCompanyController.deleteCompanyById);

module.exports = router;
