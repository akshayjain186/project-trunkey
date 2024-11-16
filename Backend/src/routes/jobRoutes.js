const express = require('express');
const router = express.Router();
const jobController = require('../controller/jobController');


router.post('/add',jobController.createJob);

router.get('/getall', jobController.getAllJobs);

router.get('/:id', jobController.getJobById);

router.put('/:id', jobController.updateJob);

router.delete('/:id', jobController.deleteJob);

module.exports = router;
