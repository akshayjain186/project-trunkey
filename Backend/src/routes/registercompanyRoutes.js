const express = require('express');
const router = express.Router();
const registerCompanyController = require('../controller/registerCompanyController');

router.post('/add', registerCompanyController.createCompany);

router.get('/by-job-type', registerCompanyController.getCompaniesByJobType);

router.put('/:companyId', registerCompanyController.updateCompany);

router.get('/:companyId', registerCompanyController.getCompanyById);

router.get('/', registerCompanyController.getAllCompanies);

router.delete('/:id', registerCompanyController.deleteCompanyById);

module.exports = router;
