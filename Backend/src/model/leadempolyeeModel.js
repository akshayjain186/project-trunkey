const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');
// const LeadSource = require('../model/leadSource')


const Lead = sequelize.define('Lead', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    address: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    postalCode: {
        type: DataTypes.STRING,
        field: 'postal_code',
    },
    mobilePhone: {
        type: DataTypes.STRING,
        field: 'mobile_phone',
    },

    typeOfHome: {
        type: DataTypes.STRING,
        field: 'type_of_home',
    },

    //   leadSourceId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: LeadSource, 
    //       key: 'id',
    //     },
    //   },



    leadSource: {
        type: DataTypes.STRING,

    },

    comment: {
        type: DataTypes.TEXT,
    },

    //   services: {
    //     type: DataTypes.JSON,
    //   },
},
    {
        tableName: 'Employeeleads',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

// Lead.belongsTo(LeadSource, { foreignKey: 'leadSourceId', as: 'leadSource' });
// LeadSource.hasMany(Lead, { foreignKey: 'leadSourceId', as: 'leads' });

module.exports = Lead;
