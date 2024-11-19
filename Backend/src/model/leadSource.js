const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const LeadSource = sequelize.define('LeadSource', {


  lead_source: {
    type: DataTypes.STRING,
    allowNull: false, 
  },

}, {
  tableName: 'leadsource',
  timestamps: false,      
});

module.exports = LeadSource;
