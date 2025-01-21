const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/userModel');

/**
 * Registers a new user in the database.
 *
 * @param {Object} req - The request object containing the user's registration details.
 * @param {string} req.body.username - The username of the new user.
 * @param {string} req.body.email - The email address of the new user.
 * @param {string} req.body.password - The plain text password of the new user.
 * @param {Object} res - The response object for sending HTTP responses.
 *
 * @returns {void} - Sends a JSON response with the new user's details or an error message.
 */
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = await User.create({ username, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Registration error: ", error); // Log error for debugging
    res.status(500).json({ error: 'Server Error' });
  }
};

/**
 * Authenticates a user and generates a JWT token.
 *
 * @param {Object} req - The request object containing the user's login credentials.
 * @param {string} req.body.email - The email address of the user attempting to log in.
 * @param {string} req.body.password - The plain text password of the user.
 * @param {Object} res - The response object for sending HTTP responses.
 *
 * @returns {void} - Sends a JSON response with a JWT token or an error message.
 *
 * @throws {Error} - Returns a 500 status code if a server error occurs.
 */
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'User not found' }); // Explicitly return
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' }); // Explicitly return
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.json({ token }); // Explicitly return
  } catch (error) {
    console.error("Login error: ", error); // Log error for debugging
    return res.status(500).json({ error: 'Server Error' }); // Explicitly return
  }
};

module.exports = { registerUser, loginUser };
