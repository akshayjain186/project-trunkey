require('dotenv').config({ path: '../../shared/config/.env' });
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const { sequelize } = require('../config/database');
const { authenticate } = require('../middleware/authMiddleware');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', authenticate, productRoutes);  // Protect product routes with authentication

// Test DB connection and handle errors in a single chain
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(`Error: ${err}`)); // Direct chaining for error handling

// Start server with direct chaining
app.listen(process.env.PORT || 3002, () =>
  console.log(`Server running on port ${process.env.PORT || 3002}`) // Direct chaining for server start
);
