const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');
const Job = require('../model/jobModels'); 
const UserAccount = require('../model/User');
const Offer = require('./offerModels'); 

const AcceptedJob = sequelize.define(
    'AcceptedJob',
    {
        jobId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Job,
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        offerId: {
            type: DataTypes.INTEGER,
            allowNull: true, 
            references: {
                model: Offer, 
                key: 'id',
            },
            onDelete: 'CASCADE', 
            onUpdate: 'CASCADE',
        },
        acceptedBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserAccount, 
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        acceptedDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        status: {
            type: DataTypes.ENUM('Accepted', 'In Progress', 'Completed', 'Cancelled'),
            defaultValue: 'Accepted',
        },
        remarks: { type: DataTypes.TEXT },
    },
    {
        tableName: 'accepted_jobs',
        timestamps: false,
    }
);

// Define relationships
Job.hasMany(AcceptedJob, { foreignKey: 'jobId', as: 'job' }); 
AcceptedJob.belongsTo(Job, { foreignKey: 'jobId', as: 'job' }); 


UserAccount.hasMany(AcceptedJob, { foreignKey: 'acceptedBy', as: 'user' });
AcceptedJob.belongsTo(UserAccount, { foreignKey: 'acceptedBy', as: 'user' }); 


Offer.hasMany(AcceptedJob, { foreignKey: 'offerId', as: 'offer' }); 
AcceptedJob.belongsTo(Offer, { foreignKey: 'offerId', as: 'offer' }); 


module.exports = AcceptedJob;

// Use migrations or specific sync logic
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection established successfully!');
        return sequelize.sync({ force: false }); 
    })
    .then(() => {
        console.log('Database synced successfully!');
    })
    .catch((error) => {
        if (error.code === 'ER_DUP_FIELDNAME') {
            console.error('Duplicate field detected. Check your database schema!');
        } else {
            console.error('Error syncing database:', error.message);
        }
    });
