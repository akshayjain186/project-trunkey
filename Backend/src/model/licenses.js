const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const License = sequelize.define('License', {
  continent: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  country: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  language: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  currency: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  organisationNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  managerName : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  managerSurname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobilePhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Licenses', 
  timestamps: true,      
});

module.exports = License;
