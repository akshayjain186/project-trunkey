const express = require('express');
const { createProduct, getAllProducts, getProductById } = require('../controllers/productController');
const router = express.Router();

// Create a new product
router.post('/', createProduct);

// Get all products
router.get('/', getAllProducts);

// Get a product by ID
router.get('/:id', getProductById);

module.exports = router;
