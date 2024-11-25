const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const UserAccount = require('../model/User');
const Role = require('../model/role');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { generateRefreshToken, generateAccessToken } = require('../utils/tokens');

const register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      phone,
      roleName,
      address,
      postalcode,
    } = req.body;


     // Check if passwords match
     if (password !== confirmPassword) {
      return res.status(400).json({
        message: 'Passwords do not match',
        status: 'error',
      });
    }

    const existingUser = await UserAccount.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        message: "Email address already exists",
        status: "error",
      });
    }

    const role = await Role.findOne({
      where: { machineName: roleName || 'User' },
    });
    if (!role) {
      return res.status(500).json({
        message: 'User role not found',
        status: 'error',
      });
    }

    // const hashedPassword = await bcrypt.hash(password, 8);

    const userAccount = await UserAccount.create({
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
      postalcode,
      roleId: role.id,
    });

    res.status(201).json({
      message: "User account created successfully",
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      error: error.message
    });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const userAccount = await UserAccount.findOne({ where: { email } });
      if (!userAccount) {
        return res.status(400).send({
          message: "Invalid email or password.",
          status: "error",
        });
      }

      let same = JSON.stringify(userAccount)
      // console.log(same, "this is call ")


      // const validPassword = await userAccount.comparePassword(password);
      // console.log(validPassword, '======================================')
      // if (!validPassword) {
      //   return res.status(400).send({
      //     message: 'Invalid email or password.',
      //     status: 'error',
      //   });
      // }

      const role = await Role.findByPk(userAccount.roleId);
      if (!role) {
        return res.status(400).json({
          message: "Role not found",
          status: "error",
        });
      }

      const accessToken = generateAccessToken(userAccount, role);
      const refreshToken = generateRefreshToken(userAccount, role);

      userAccount.refreshToken = refreshToken;
      userAccount.isActive = true;
      await userAccount.save();

      res.json({
        message: `${role.name} account logged in successfully`,
        status: "success",
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    } else {
      res.status(400).send({
        message: "Email/Password or Phone number is required.",
        status: "error",
      });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user exists
    const user = await UserAccount.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        message: 'No account found with this email address',
        status: 'error',
      });
    }

    // Generate a token
    const resetPasswordToken = crypto.randomBytes(32).toString('hex');

    // Store the token in the database with an expiry time
    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Construct the reset URL
    const resetURL = `http://your-frontend-url.com/reset-password/${resetPasswordToken}`;

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'kv2334779@gmail.com',
        pass: 'ehrj sjnn drow ioqn',
      },
    });

    const mailOptions = {
      from: 'kv2334779@gmail.com',
      to: 'kv2334779@gmail.com',
      subject: 'Password Reset',
      text: `You requested a password reset. Click the link to reset your password: ${resetURL}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: 'Password reset email sent successfully',
      status: 'success',
      token: resetPasswordToken
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const user = await UserAccount.findOne({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: { [Op.gt]: Date.now() }, // Ensure the token is not expired
      },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token', status: 'error' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10); // 10 is the salt rounds for bcrypt

    // user.password = newPassword;

    // Update user's password and clear the reset token and expiration
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();

    res.status(200).json({
      message: 'Password reset successfully',
      status: 'success',
    });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 'error' });
  }
};

// const editProfile = async (req, res, next) => {
//   try {
//     const userId = req.params.id; // Get user ID from the request parameters
//     const {
//       email,
//       firstName,
//       lastName,
//       phone,
//       roleName,
//       postalcode,
//       address,
//     } = req.body;

//     // Construct the update object with only the provided fields
//     const updateFields = {
//       ...(email && { email }),
//       ...(firstName && { firstName }),
//       ...(lastName && { lastName }),
//       ...(phone && { phone }),
//       ...(roleName && { roleName }),
//       ...(postalcode && { postalcode }),
//       ...(address && { address }),
//     };

//     // Check if there are fields to update
//     if (Object.keys(updateFields).length === 0) {
//       return res.status(400).json({
//         message: 'No fields provided to update',
//         status: 'error',
//       });
//     }

//     // Find the user by ID
//     const user = await UserAccount.findByPk(userId);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found', status: 'error' });
//     }

//     // Update the user's details
//     await user.update(updateFields);

//     // Respond with the updated user data
//     res.status(200).json({
//       userData: user,
//       message: 'Profile updated successfully',
//       status: 'success',
//     });
//   } catch (error) {
//     console.error('Error updating profile:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };


// const getProfile = async (req, res, next) => {
//   try {
//     const userId = req.params.id;  // Get userId from URL params

//     if (!userId) {
//       return res.status(400).json({ message: 'User ID is required' });
//     }

//     // Fetch the user by userId from the database without including the role
//     const user = await UserAccount.findByPk(userId);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Prepare the user data for the response
//     const userData = {
//       userId: user.id,
//       emailAddress: user.email,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       phone: user.phone,
//       postalcode: user.postalcode,
//       address: user.address,
//     };

//     // Send the profile data in the response
//     res.json({
//       userData: userData,
//       message: 'Get Profile Data Successfully',
//       status: 'success',
//     });
//   } catch (error) {
//     console.error('Error retrieving profile:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// const getAllProfiles = async (req, res, next) => {
//   try {
//     // Fetch all users from the database using Sequelize's findAll method
//     const users = await UserAccount.findAll({
//       attributes: ['id', 'email', 'firstName', 'lastName', 'phone', 'postalcode', 'address'], // Select specific fields
//     });

//     // Check if users are found
//     if (!users || users.length === 0) {
//       return res.status(404).json({ message: 'No users found' });
//     }

//     // Map the users to the desired response structure
//     const userData = users.map(user => ({
//       userId: user.id,
//       emailAddress: user.email,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       phone: user.phone,
//       postalcode: user.postalcode,
//       address: user.address,
//     }));

//     // Send the profiles data in the response
//     res.json({
//       userData: userData,
//       message: 'Get All Profiles Successfully',
//       status: 'success',
//     });
//   } catch (error) {
//     console.error('Error retrieving profiles:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };



// const logout = (req, res, next) => {
//   try {
//     req.session.destroy();
//     res.json({ message: 'User logged out successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

module.exports = { register, login, forgotPassword, resetPassword }
// editProfile,getProfile,getAllProfiles 
