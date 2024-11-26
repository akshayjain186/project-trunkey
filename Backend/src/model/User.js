// src/models/User.js
const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const sequelize = require('../config/databaseConfig');

const User = sequelize.define('User', {
  Name: { type: DataTypes.STRING, allowNull: false },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
//   smallprojectId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
// },
  address: { type: DataTypes.STRING, defaultValue: '' },
  Surname: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING},
  Mobilephone: { type: DataTypes.STRING },
  postalcode: { type: DataTypes.STRING },
  resetPasswordToken: { type: DataTypes.STRING, defaultValue: null },
  resetPasswordExpires: { type: DataTypes.DATE, defaultValue: null },
}, {
  hooks: {
    beforeSave: async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    },
  },
});

User.associate = (models) => {
  console.log(models)
  User.belongsTo(models.Role, { foreignKey: 'roleId' });
};

// Instance Methods
User.prototype.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

User.prototype.generateResetToken = function () {
  const token = crypto.randomBytes(20).toString('hex');
  this.resetPasswordToken = token;
  this.resetPasswordExpires = Date.now() + 3600000; // 1 hour expiration
  return token;
};

module.exports = User;
