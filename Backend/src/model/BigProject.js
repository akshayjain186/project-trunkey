const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');
// const User = require('./User');


const BigProject = sequelize.define('BigProject', {
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
    },
    subcategoryId: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    subcategory_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    projectmanageroleId: {
        type: DataTypes.JSON,
        allowNull: false,
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
    // contact_info: {
    //     type: DataTypes.STRING,
    //     allowNull:false,
    // }
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
    tableName: 'big_projects',
    timestamps: true,
});

module.exports = BigProject; 