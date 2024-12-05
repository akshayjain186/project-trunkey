const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/database');
const Continent = require('../models/continentsModel');

// Define the Country model
class Country extends Model {}

Country.init({
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emoji: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Country', 
  timestamps: false,  
});

Country.belongsTo(Continent, {
  foreignKey: "continentId",  
  onDelete: "CASCADE",  
});

module.exports = Country;



