const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');
const Category = require('./categoryModel');
const projectmanagerole = require('./projectmanagementRole')

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
        allowNull: false,
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

// contact information

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

    // contact_person:{
    //     type:String
    // }

    //   userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: UserAccount, 
    //       key: 'id', 
    //     },
    //   },

    projectManagementRollId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: projectmanagerole, 
            key: 'id', 
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE', 
    }

}, {
    timestamps: true,
    tableName: 'RegisterCompanies',
});



module.exports = RegisterCompany;
