const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const Job = sequelize.define('Job', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false, // Keep userId as NOT NULL
    references: {
      model: 'Users', 
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE', 
  },

//   offerId: {
//     type: DataTypes.INTEGER,
//     allowNull: true, 
//     references: {
//         model: Offer, 
//         key: 'id',
//     },
//     onDelete: 'CASCADE', 
//     onUpdate: 'CASCADE',
// },
  

  // typeOfProject: {
  //   type: DataTypes.ENUM('big', 'small'),
  //   allowNull: false,
  //   // defaultValue: 'small',
  // },

  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: true
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: true
  },
  jobDescription: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('posted', 'accepted', 'completed'),
    allowNull: false,
    defaultValue: 'posted'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'jobs', 
  timestamps: true
});

module.exports = Job;
