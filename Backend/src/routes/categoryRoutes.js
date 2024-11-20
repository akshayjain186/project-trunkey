const express = require('express');
const { createCategory, getCategoriesDetails, updateCategory, deleteCategory } = require('../controller/categoryController');

const router = express.Router();

router.post('/save', createCategory);
router.get("/fetch", getCategoriesDetails);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
