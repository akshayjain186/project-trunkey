const express = require('express');
const {
    createSubcategories,
    getAllSubcategory,
    getSubcategory,
    updateSubcategory,
    deleteSubcategory,
} = require('../controller/subcategoryController');

const router = express.Router();

router.post('/add', createSubcategories);
router.get('/fetch', getAllSubcategory);
router.get('/fetch/:id', getSubcategory);
router.put('/update/:id', updateSubcategory);
router.delete('/delete/:id', deleteSubcategory);

module.exports = router;
