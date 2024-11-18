const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');
const Category = require('./Categories'); // Assuming you have a Category model
const Subcategory = require('./Subcategories'); // Assuming you have a Subcategory model
const Projectmanagerole = require('./Projectmanagerole'); // Assuming you have a ProjectManagerRole model

const SmallProject = sequelize.define('SmallProject', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    typeOfProject: {
        type: DataTypes.ENUM('Big', 'Small'),
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER, // Foreign key to Category model
        allowNull: false,
        references: {
            model: Category,
            key: 'id',
        },
    },
    subcategoryId: {
        type: DataTypes.INTEGER, // Foreign key to Subcategory model
        allowNull: false,
        references: {
            model: Subcategory,
            key: 'id',
        },
    },
    projectmanageroleId: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: Projectmanagerole,
            key: 'id',
        },
    },
    typeOfHome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    projectAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    generalComment: {
        type: DataTypes.STRING,
        validate: {
            len: [0, 500],
        },
    },
    contactName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contactSurname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contactEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    contactMobile: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'small_projects',
    timestamps: true,
});

// Set up associations
SmallProject.belongsTo(Category, { foreignKey: 'categoryId', onDelete: 'CASCADE' });
SmallProject.belongsTo(Subcategory, { foreignKey: 'subcategoryId', onDelete: 'CASCADE' });
SmallProject.belongsTo(Projectmanagerole, { foreignKey: 'projectmanageroleId', onDelete: 'CASCADE' });

module.exports = SmallProject;
