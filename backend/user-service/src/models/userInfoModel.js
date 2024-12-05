const { DataTypes, Model } = require('sequelize');
const {sequelize }= require('../../config/database'); 

class UserInfo extends Model {}

UserInfo.init({
    userId:{
        type: DataTypes.STRING,
        allowNull: false,
    },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  continent_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currency_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  language_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  organization_number: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
}, {
  sequelize, 
  modelName: 'UserInfo', 
  tableName: 'Userinfo',
  timestamps: true, 
});

module.exports = UserInfo;