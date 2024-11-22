const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const ProjectSubcategory = sequelize.define(
  'ProjectSubcategory',
  {
    subcategoryId: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    smallprojectId: {
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
    tableName: 'project_subcategories',
    timestamps: true,
  }
);

module.exports = ProjectSubcategory;
