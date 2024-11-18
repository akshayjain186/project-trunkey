const express = require('express');
const router = express.Router();
const jobController = require('../controller/jobController');


router.post('/add',jobController.createJob);

router.get('/fetch', jobController.getAllJobs);

router.get('/:id', jobController.getJobById);

router.put('/:jobId', jobController.updateJob);

router.delete('/:jobId', jobController.deleteJob);

module.exports = router;
