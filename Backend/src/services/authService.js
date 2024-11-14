const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  return { token, user };
};

module.exports = { authenticateUser };
