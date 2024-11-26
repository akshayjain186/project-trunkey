const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const RegisterCompany = sequelize.define('RegisterCompany', {
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    organisationNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.JSON, 
        allowNull: false,
    },
    jobTypes: {
        type: DataTypes.JSON, 
        allowNull: false,
    },
    employeeCount: {
        type: DataTypes.JSON, 
        allowNull: false,
    },
    useSubcontractors: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    countyCoverage: {
        type: DataTypes.JSON, 
        allowNull: false,
    },
   
    projectManagementRollId: {
        type: DataTypes.JSON, 
        allowNull: false,
    },

    continent: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    country: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    language: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    currency: {
        type: DataTypes.JSON,
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'RegisterCompanies',
});

module.exports = RegisterCompany;
