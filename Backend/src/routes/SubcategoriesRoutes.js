const express = require('express');
const {
  createSubcategory,
  getAllSubcategory,
  getSubcategory,
  updateSubcategory,
  deleteSubcategory,
} = require('../controller/SubcategoriesController.js');

const router = express.Router();

router.post('/add', createSubcategory);
router.get('/fetch', getAllSubcategory);
router.get('/fetch/:id', getSubcategory);
router.put('/update/:id', updateSubcategory);
router.delete('/delete/:id', deleteSubcategory);

module.exports = router;
