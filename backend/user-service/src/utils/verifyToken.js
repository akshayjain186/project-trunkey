const jwt = require('jsonwebtoken');
const { User } = require('../models/userModel');  // Make sure you're importing the User model correctly

const verifyToken = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    // Verify token with your secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Use Sequelize's findByPk to find the user by primary key (ID)
    const user = await User.findByPk(decoded.userId);  // Replace 'findById' with 'findByPk'

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ userId: user.id });
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = { verifyToken };
