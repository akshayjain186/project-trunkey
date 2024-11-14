// src/models/Role.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');


const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  machineName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  permissions: {
    type: DataTypes.TEXT, // Store permissions as a JSON string
    allowNull: true,
  },
});

module.exports = Role;
