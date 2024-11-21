const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const projectmanagerole = sequelize.define(
  'projectmanagerole',
  {
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
  },
  {
    timestamps: true,
    tableName: 'projectmanagerole',
  }
);

module.exports = projectmanagerole;
