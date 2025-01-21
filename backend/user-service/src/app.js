require('dotenv').config({ path: '../../shared/config/.env' });

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { sequelize } = require('../config/database');

const app = express();

// Middleware
app.use(express.json());

// Enable CORS for all origins (or specify allowed origins)
app.use(cors());

// Routes
app.use('/api/users', userRoutes);

// Test DB connection and log directly in the chain
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log(`Error: ${err}`)); // Direct chaining for error handling

// Start server with direct chaining
app.listen(process.env.PORT || 3001, () =>
  console.log(`Server running on port ${process.env.PORT || 3001}`) // Direct chaining for server start
);
