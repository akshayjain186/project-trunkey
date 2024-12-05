// const { DataTypes } = require('sequelize');
// const sequelize  = require('../../config/database');

// const User = sequelize.define('User', {
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       surname: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       mobile_no:{
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       roleId:{
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       isActive:{
//         type: DataTypes.BOOLEAN, 
//         allowNull: false,        
//         defaultValue: true, 
//       }
// });

// module.exports = { User } ;


const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../../config/database'); // Adjust the path as per your project structure

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize, // The Sequelize instance
    modelName: 'User', // The model name
    tableName: 'Users', // Table name in the database
    timestamps: true, // Add createdAt and updatedAt timestamps
  }
);

module.exports = User;
