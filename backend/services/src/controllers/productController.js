const { Product } = require('../models/productModel');

// Create a new product
const createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const newProduct = await Product.create({ name, description, price });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try { 
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' }); // Explicitly return
    }
    return res.status(200).json(product); // Explicitly return
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' }); // Explicitly return
  }
};

module.exports = { createProduct, getAllProducts, getProductById };
