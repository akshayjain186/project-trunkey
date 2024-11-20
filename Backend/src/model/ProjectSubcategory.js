const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');
// const Category = require('./Categories'); 
const Subcategory = require('./Subcategories');
// const SmallProject = require('./Project');

const ProjectSubcategory = sequelize.define('ProjectSubcategory', {
    subcategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    smallprojectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // categoryId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
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
}, {
    tableName: 'project_subcategories',
    timestamps: true,
});

// Set up associations
// ProjectSubcategory.belongsTo(Category, { foreignKey: 'categoryId', as: 'category', onDelete: 'CASCADE' });
ProjectSubcategory.belongsTo(Subcategory, { foreignKey: 'subcategoryId', as: 'subcategory', onDelete: 'CASCADE' });
// ProjectSubcategory.belongsTo(SmallProject, { foreignKey: 'smallprojectId', as: 'smallproject', onDelete: 'CASCADE' });



module.exports = ProjectSubcategory;
