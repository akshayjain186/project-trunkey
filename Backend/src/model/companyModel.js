const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const RegisterCompanies = sequelize.define('RegisterCompanies', {
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    organisationNumber: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    categoryId: {
        type: DataTypes.JSON,
        allowNull: false,
    },

    projectManagementRollId: {
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

    /// licenses information

    
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

module.exports = RegisterCompanies;
