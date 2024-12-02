const jwt = require('jsonwebtoken');

/**
 * Generates a JWT token for a user.
 * 
 * @param {string} userId - The ID of the user for whom the token is generated.
 * @returns {string} - A signed JSON Web Token (JWT) string.
 * 
 * The token contains the user's ID and is signed with the secret specified in the `JWT_SECRET` 
 * environment variable. It is valid for 1 hour.
 */
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { generateToken };
