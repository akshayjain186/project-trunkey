const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/database');  

class Continent extends Model {}

Continent.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Continent',
});

module.exports = Continent;
