const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const BigProjectSubcategory = sequelize.define(
  'BigProjectSubcategory',
  {
    subcategoryId: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    bigprojectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    attachment: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    floor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'Bigproject_subcategory',
    timestamps: true,
  }
);

module.exports = BigProjectSubcategory;
