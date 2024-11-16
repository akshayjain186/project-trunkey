const express = require('express');
const router = express.Router();
const {
  createAcceptedJob,
  getAcceptedJobById,
  getAllAcceptedJobs,
  updateAcceptedJob,
  deleteAcceptedJob,
} = require('../controller/acceptedJobController');

router.post('/create', createAcceptedJob);

router.get('/:id', getAcceptedJobById);

router.get('/fetch/getall', getAllAcceptedJobs);

router.put('/update/:id', updateAcceptedJob);

router.delete('/:id', deleteAcceptedJob);

module.exports = router;
