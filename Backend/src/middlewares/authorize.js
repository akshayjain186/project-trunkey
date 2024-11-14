// const jwt = require('jsonwebtoken');
// const User = require('../model/User');
// require("dotenv").config();

// const authorize = (role) => {
//   return async (req, res, next) => {
//     console.log('authorization', req.headers);
//     const token = req.headers['authorization'];
//     // console.log('Authorization header:', token); // Log the incoming token

//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: 'Access Denied. No token provided.' });
//     }

//     try {
//       const decoded = jwt.verify(token.split(' ')[1], process.env.ACCESS_TOKEN_SECRET); // Splitting to remove 'Bearer'
//       console.log('Decoded token:', JSON.stringify(decoded)); // Log the decoded token
//       req.user = await User.findById(decoded.id).populate('role');

//       if (!req.user) {
//         return res.status(401).json({ message: 'User not found.' });
//       }

//       if (role && req.user.role.name !== role) {
//         return res
//           .status(403)
//           .json({ message: 'Forbidden. You do not have permission.' });
//       }

//       next();
//     } catch (err) {
//       // console.error('JWT verification error:', err); // Log the error
//       res.status(400).json({ message: 'Invalid token.' });
//     }
//   };
// };

// module.exports = authorize;

const jwt = require('jsonwebtoken');
const User = require('../model/User');
require('dotenv').config();

const authorize = (roles) => {
  return async (req, res, next) => {
    console.log('authorization', req.headers);
    const token = req.headers['authorization'];

    if (!token) {
      return res
        .status(401)
        .json({ message: 'Access Denied. No token provided.' });
    }

    try {
      const decoded = jwt.verify(
        token.split(' ')[1],
        process.env.ACCESS_TOKEN_SECRET
      ); // Splitting to remove 'Bearer'
      console.log('Decoded token:', JSON.stringify(decoded)); // Log the decoded token
      req.user = await User.findById(decoded.id).populate('role');

      if (!req.user) {
        return res.status(401).json({ message: 'User not found.' });
      }

      // If roles are provided, check if the user's role matches any of the allowed roles
      if (roles && roles.length > 0) {
        const userRoles = req.user.role.machineName; // Assuming role is a single object, adjust if it's an array
        if (!roles.includes(userRoles)) {
          return res
            .status(403)
            .json({ message: 'Forbidden. You do not have permission.' });
        }
      }

      next();
    } catch (err) {
      // console.error('JWT verification error:', err); // Log the error
      res.status(400).json({ message: 'Invalid token.' });
    }
  };
};

module.exports = authorize;
