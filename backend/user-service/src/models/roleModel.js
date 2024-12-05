
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');


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
    type: DataTypes.TEXT, 
    allowNull: true,
  },
  isActive:{
    type: DataTypes.BOOLEAN, 
    allowNull: false,        
    defaultValue: true, 
  },
});

module.exports = Role;
