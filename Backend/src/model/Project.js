const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');
// const Category = require('./Categories');
// const Subcategory = require('./Subcategories');
// const Projectmanagerole = require('./Projectmanagerole');
// const ProjectSubcategory = require('./ProjectSubcategory');

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
        type: DataTypes.JSON,
        allowNull: false,
        // references: {
        //     model: Category,
        //     key: 'id',
        // },
    },
    subcategoryId: {
        type: DataTypes.JSON,
        allowNull: false,
        // references: {
        //     model: Subcategory,
        //     key: 'id',
        // },
    },
    projectmanageroleId: {
        type: DataTypes.JSON,
        allowNull: false,
        // references: {
        //     model: Projectmanagerole,
        //     key: 'id',
        // },
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
// SmallProject.belongsTo(Category, { foreignKey: 'categoryId', onDelete: 'CASCADE' });
// SmallProject.belongsTo(Subcategory, { foreignKey: 'subcategoryId', onDelete: 'CASCADE' });
// SmallProject.belongsTo(Projectmanagerole, { foreignKey: 'projectmanageroleId', onDelete: 'CASCADE' });
// SmallProject.belongsTo(ProjectSubcategory, { foreignKey: 'projectsubcategoryId', as: 'projectsubcategory', onDelete: 'CASCADE' });

module.exports = SmallProject; 