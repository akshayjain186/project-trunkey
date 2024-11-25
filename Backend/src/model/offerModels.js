const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');
const UserAccount = require('./User');
const Job = require('./jobModels');

const Offer = sequelize.define('Offer', {

    jobId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'jobs',
            key: 'id'
        }
    },

    offeredBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },

    offerDetails: {
        type: DataTypes.STRING,
        allowNull: false
    },

    offeredAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pending',
        validate: {
            isIn: [['Pending', 'Accepted', 'Rejected']]
        }
    }
}, {
    tableName: 'Offers',
    timestamps: false
});

// Define the relationship between Offer and User
// Offer.belongsTo(UserAccount, { foreignKey: 'offeredBy', as: 'user' });

// Job model
Job.hasMany(Offer, { foreignKey: 'jobId', as: 'jobs' });

// Offer model
Offer.belongsTo(Job, { foreignKey: 'jobId', as: 'jobs' });


module.exports = Offer;
