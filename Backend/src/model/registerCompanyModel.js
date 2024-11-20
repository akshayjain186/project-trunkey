const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');
const Category = require('./categoryModel');


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
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Category,
            key: 'id',
        },
    },
    jobTypes: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    employeeCount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    useSubcontractors: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    countyCoverage: {
        type: DataTypes.STRING,
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

    //   userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: 'UserAccount', 
    //       key: 'id', 
    //     },
    //   },

}, {
    timestamps: true,
    tableName: 'RegisterCompany',
});



module.exports = RegisterCompany;
