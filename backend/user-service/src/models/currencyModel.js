const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/database');
class Currency extends Model {}

Currency.init({
  currencycode: {
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
  modelName: 'Currency', 
  timestamps: false,  
});

module.exports = Currency;
