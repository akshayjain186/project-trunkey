const express = require('express');
const {createProject,getAllProject,getProjectById, updateProject,deleteProject,uploadAttachment } = require('../controller/ProjectController.js');
// const { createNewServices, getAllServices } = require('../controller/ServicesController.js');
const { upload } = require('../middlewares/upload.js');
const router = express.Router();

// Routes
router.post('/uploadfile/:ProjectSubcategoryId', upload.array('attachment', 10), uploadAttachment);
router.post('/add', createProject);
router.get('/fetch', getAllProject);
router.get('/fetch/:id', getProjectById);
router.put('/update/:id', updateProject);
router.delete('/delete/:id', deleteProject);

// // Routes of services
// router.post('/save', createNewServices);
// router.get('/get', getAllServices);

module.exports = router;