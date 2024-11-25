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
    managerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    managersurname: {
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
    mobilePhone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    projectManagementRollId: {
        type: DataTypes.JSON, 
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'RegisterCompany',
});

module.exports = RegisterCompany;
