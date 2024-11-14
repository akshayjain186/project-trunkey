const jwt = require('jsonwebtoken');

const generateAccessToken = (user, role) => {
  return jwt.sign(
    // { id: user._id, role: role.name },
    { id: user._id, role: role.machineName },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '1h' }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.REFRESH_TOKEN_SECRET, // separate secret key for refresh token
    { expiresIn: '7d' } // refresh token expiry
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
