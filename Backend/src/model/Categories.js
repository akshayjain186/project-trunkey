const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require ('../config/databaseConfig');

const Category = sequelize.define('Category', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
}, {
  timestamps: true, 
  tableName: 'Categories', 
});

module.exports = Category;
