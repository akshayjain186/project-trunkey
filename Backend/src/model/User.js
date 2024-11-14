// src/models/User.js
const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const sequelize = require('../config/databaseConfig');

const User = sequelize.define('User', {
  firstName: { type: DataTypes.STRING },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false, // Assuming roleId is required
  },
  address: { type: DataTypes.STRING, defaultValue: '' },
  lastName: { type: DataTypes.STRING },
  gender: { type: DataTypes.STRING, defaultValue: '' },
  dob: { type: DataTypes.DATEONLY },
  userName: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  language: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  countryCode: { type: DataTypes.STRING },
  isUser: { type: DataTypes.BOOLEAN },
  resetPasswordToken: { type: DataTypes.STRING, defaultValue: null },
  resetPasswordExpires: { type: DataTypes.DATE, defaultValue: null },
  emailVerificationOtp: { type: DataTypes.STRING, defaultValue: null },
  emailVerificationExpires: { type: DataTypes.DATE, defaultValue: null },
  phoneVerificationOtp: { type: DataTypes.STRING, defaultValue: null },
  phoneVerificationExpires: { type: DataTypes.DATE, defaultValue: null },
  verificationOtp: { type: DataTypes.STRING, defaultValue: null },
  verificationExpires: { type: DataTypes.DATE, defaultValue: null },
  emailVerificationStatus: { type: DataTypes.BOOLEAN, defaultValue: false },
  emailVerificationAttempts: { type: DataTypes.INTEGER, defaultValue: 0 },
  emailVerificationAttemptsExpires: { type: DataTypes.DATE, defaultValue: null },
  emailVerificationSent: { type: DataTypes.DATE, defaultValue: null },
  lastLogin: { type: DataTypes.DATE, defaultValue: null },
  profileImage: { type: DataTypes.STRING, defaultValue: '' },
  googleId: { type: DataTypes.STRING, unique: true, allowNull: true },
  facebookId: { type: DataTypes.STRING, unique: true, allowNull: true },
  appleId: { type: DataTypes.STRING, unique: true, allowNull: true },
  googleAccessToken: { type: DataTypes.STRING, defaultValue: null },
  googleRefreshToken: { type: DataTypes.STRING, defaultValue: null },
  facebookAccessToken: { type: DataTypes.STRING, defaultValue: null },
  appleAccessToken: { type: DataTypes.STRING, defaultValue: null },
  appleRefreshToken: { type: DataTypes.STRING, defaultValue: null },
  identityCard: { type: DataTypes.STRING, defaultValue: '' },
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
