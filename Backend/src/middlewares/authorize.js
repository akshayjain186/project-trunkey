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
const UserAccount = require('../model/User');
const{ Role } = require('../model/role');  // Adjust based on your Sequelize models
require('dotenv').config();

const authorize = (roles) => {
  return async (req, res, next) => {
    console.log('Authorization Header:', req.headers);
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    try {
      // Verify JWT token
      const decoded = jwt.verify(token.split(' ')[1], process.env.ACCESS_TOKEN_SECRET); // Splitting to remove 'Bearer'
      console.log('Decoded token:', JSON.stringify(decoded));  // Log the decoded token

      // Find the user by the decoded ID (use findByPk for Sequelize)
      const user = await UserAccount.findByPk(decoded.id);
        //  {
      //   include: [{
      //     model: Role,  // Include Role data
      //     attributes: ['name'],  // Adjust based on your model structure
      //   }],
      // });

      // Check if user exists
      if (!user) {
        return res.status(401).json({ message: 'User not found.' });
      }

      // If roles are provided, check if the user's role matches any of the allowed roles
      if (roles && roles.length > 0) {
        const userRoles = user.role.name;  // Assuming the role model has a 'name' field
        if (!roles.includes(userRoles)) {
          return res.status(403).json({ message: 'Forbidden. You do not have permission.' });
        }
      }

      // Attach user to request object
      req.user = user;
      next();
    } catch (err) {
      console.error('JWT verification error:', err);
      res.status(400).json({ message: 'Invalid token.', error: err.message });
    }
  };
};

module.exports = authorize;
