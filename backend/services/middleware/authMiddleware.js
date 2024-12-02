const axios = require('axios');

/**
 * Middleware function to authenticate the user by verifying the provided token.
 * The token should be included in the 'Authorization' header as a Bearer token (e.g., 'Authorization: Bearer <token>').
 * If the token is valid, the user ID is added to the request object for use in subsequent middleware or route handlers.
 * If the token is missing or invalid, a 401 response is sent back.
 *
 * @param {Object} req - The Express request object, which contains the HTTP request data (headers, body, params, etc.).
 * @param {Object} res - The Express response object, used to send a response back to the client.
 * @param {Function} next - The next middleware function to pass control to after successful authentication.
 * @returns {void} - If authentication is successful, calls `next()` to proceed to the next middleware; otherwise, sends a 401 response.
 */
const authenticate = async (req, res, next) => {
  // Retrieve the token from the Authorization header
  const token = req.header('Authorization')?.split(' ')[1]; // Authorization: Bearer <token>

  // If no token is provided, deny access
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    console.log('Verifying token:', token);
    let response = null; // Initialize 'response' on declaration

    // Try to verify the token via an API request
    try {
      response = await axios.post('http://localhost:3001/api/users/verify', { token });
    } catch (error) {
      // If the first URL fails, try the alternate URL for verification
      response = await axios.post('http://user-service:3001/api/users/verify', { token });
    }

    // If the token is valid, attach the user ID to the request and proceed
    if (response && response.status === 200) {
      req.user = response.data.userId; // Attach user ID to request
      return next(); // Explicitly return after calling next
    } else {
      console.log('Invalid token');
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (error) {
    // Handle errors during token verification
    console.log('Error verifying token:', error.message);
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = { authenticate };
