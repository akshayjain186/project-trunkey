const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/database');

// Define the Language model using the Model class
class Language extends Model {}

Language.init({
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,      
  modelName: 'Language', 
  timestamps: false, 
});

module.exports = Language;
