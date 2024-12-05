const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const Country = require('../models/countriesModel');
const Currency = require('../models/currencyModel'); 
const Language = require('../models/languagesModel');
const Continent = require('../models/continentsModel');
const User = require('../models/userModel');
const UserInfo = require('../models/userInfoModel');

/**
 * Registers a new user in the database with role-based authorization.
 *
 * @param {Object} req - The request object containing the user's registration details.
 * @param {string} req.body.name - The name of the new user.
 * @param {string} req.body.surname - The surname of the new user.
 * @param {string} req.body.email - The email address of the new user.
* @param {string} req.body.password - The plain text password of the new user.
 * @param {number|string} req.body.roleId - The role ID of the new user (as number or string).
 * @param {number} req.body.mobile_no - The mobile number of the new user.
 * @param {boolean|string} req.body.isActive - The active status of the user (as boolean or string).
 * @param {Object} res - The response object for sending HTTP responses.
 *
 * @returns {void} - Sends a JSON response with the new user's details or an error message.
 */

//this is function of without email pass send
// const registerUser = async (req, res) => {
//   const {
//     name,
//     surname,
//     email,
//     password,
//     roleId,
//     mobile_no,
//     isActive,
//     continent_id,
//     country_id,
//     currency_id,
//     language_id,
//     address,
//     city,
//     postal_code,
//     organization_number
//   } = req.body;


//   // Define allowed roles for registration
//   const allowedRoleIds = [2, 3, 4, 5];

//   try {
//     // Validate roleId as an allowed role
//     const numericRoleId = parseInt(roleId, 10);
//     if (!allowedRoleIds.includes(numericRoleId)) {
//       return res.status(403).json({ error: 'You are not authorized to register users with this role.' });
//     }

//     // Validate required fields
//     if (!name || !surname || !email || !password || !mobile_no || !continent_id || !country_id || !currency_id || !language_id || !city || !postal_code || !organization_number) {
//       return res.status(400).json({ error: 'All fields are required.' });
//     }

//     // Validate foreign key existence
//     const [continent, country, currency, language] = await Promise.all([
//       Continent.findByPk(continent_id),
//       Country.findByPk(country_id),
//       Currency.findByPk(currency_id),
//       Language.findByPk(language_id),
//     ]);
   

//     if (!continent) return res.status(400).json({ error: 'Invalid continent_id.' });
//     if (!country) return res.status(400).json({ error: 'Invalid country_id.' });
//     if (!currency) return res.status(400).json({ error: 'Invalid currency_id.' });
//     if (!language) return res.status(400).json({ error: 'Invalid languageId.' });

//     // Hash the password securely
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create the new user in the database
//     const newUser = await User.create({
//       name,
//       surname,
//       email,
//       password: hashedPassword,
//       mobile_no,
//       roleId: numericRoleId,
//       isActive: isActive === 'true' || isActive === true,
//     });

//     // Create user information
//     const newUserInfo = await UserInfo.create({
//       userId: newUser.id, // Foreign key reference
//       continent_id,
//       country_id,
//       currency_id,
//       language_id,
//       address: address || null,
//       city,
//       postal_code,
//       organization_number
//     });
    
//     // Respond with the newly created user details (excluding sensitive data)
//     res.status(201).json({
//       message: 'User registered successfully.',
//       user: {
//         id: newUser.id,
//         name: newUser.name,
//         surname: newUser.surname,
//         email: newUser.email,
//         mobile_no: newUser.mobile_no,
//         roleId: newUser.roleId,
//         isActive: newUser.isActive,
//         userInfo: {
//           continent: continent.name,
//           country: country.name,
//           currency: currency.name,
//           language: language.name,
//           address: newUserInfo.address,
//           city: newUserInfo.city,
//           postal_code: newUserInfo.postal_code,
//           organization_number: newUserInfo.organization_number,
//         },
//       },
//     });
    
//   } catch (error) {
//     console.error('Registration error:', error);
//     if (error.name === 'SequelizeUniqueConstraintError') {
//       return res.status(409).json({ error: 'Email or mobile number already in use.' });
//     }
//     res.status(500).json({ error: 'Server Error. Could not register user.' });
//   }
// };


// Helper function to generate a random password
const generatePassword = () => {
  return crypto.randomBytes(8).toString('hex'); // Generates a 16-character random password
};

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, // Replace with your email address
    pass: process.env.EMAIL_PASSWORD, // Replace with your email password or app-specific password
  },
});

const registerUser = async (req, res) => {
  const {
    name,
    surname,
    email,
    roleId,
    mobile_no,
    isActive,
    continent_id,
    country_id,
    currency_id,
    language_id,
    address,
    city,
    postal_code,
    organization_number,
  } = req.body;

  const allowedRoleIds = [2, 3, 4, 5]; // Allowed roles for registration

  try {
    // Validate roleId
    const numericRoleId = parseInt(roleId, 10);
    if (!allowedRoleIds.includes(numericRoleId)) {
      return res.status(403).json({ error: 'You are not authorized to register users with this role.' });
    }

    // Validate required fields
    const requiredFields = {
      name,
      surname,
      email,
      mobile_no,
      continent_id,
      country_id,
      currency_id,
      language_id,
      city,
      postal_code,
      organization_number,
    };

    for (const [key, value] of Object.entries(requiredFields)) {
      if (!value) {
        return res.status(400).json({ error: `${key} is required.` });
      }
    }

    // Validate foreign keys
    const [continent, country, currency, language] = await Promise.all([
      Continent.findByPk(continent_id),
      Country.findByPk(country_id),
      Currency.findByPk(currency_id),
      Language.findByPk(language_id),
    ]);

    if (!continent) return res.status(400).json({ error: 'Invalid continent_id.' });
    if (!country) return res.status(400).json({ error: 'Invalid country_id.' });
    if (!currency) return res.status(400).json({ error: 'Invalid currency_id.' });
    if (!language) return res.status(400).json({ error: 'Invalid language_id.' });

    // Generate and hash the password
    const generatedPassword = generatePassword();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(generatedPassword, salt);

    // Create the user
    const newUser = await User.create({
      name,
      surname,
      email,
      password: hashedPassword,
      mobile_no,
      roleId: numericRoleId,
      isActive: isActive === 'true' || isActive === true,
    });

    // Create additional user information
    const newUserInfo = await UserInfo.create({
      userId: newUser.id,
      continent_id,
      country_id,
      currency_id,
      language_id,
      address: address || null,
      city,
      postal_code,
      organization_number,
    });

    // Send email with the password
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Our Service',
      text: `Hello ${name} ${surname},\n\nYour account has been successfully created.\n\nYour login credentials are:\nEmail: ${email}\nPassword: ${generatedPassword}\n\nPlease change your password after logging in for the first time.\n\nThank you,\nTeam`,
    });

    // Respond with success
    res.status(201).json({
      message: 'User registered successfully. Password has been sent to the registered email address.',
      user: {
        id: newUser.id,
        name: newUser.name,
        surname: newUser.surname,
        email: newUser.email,
        mobile_no: newUser.mobile_no,
        roleId: newUser.roleId,
        isActive: newUser.isActive,
        userInfo: {
          continent: continent.name,
          country: country.name,
          currency: currency.name,
          language: language.name,
          address: newUserInfo.address,
          city: newUserInfo.city,
          postal_code: newUserInfo.postal_code,
          organization_number: newUserInfo.organization_number,
        },
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ error: 'Email or mobile number already in use.' });
    }
    res.status(500).json({ error: 'Server Error. Could not register user.' });
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

/**
 * Initiates the password reset process by generating a token and sending a reset email.
 *
 * @param {Object} req - The request object containing the user's email.
 * @param {string} req.body.email - The email address of the user requesting a password reset.
 * @param {Object} res - The response object for sending HTTP responses.
 *
 * @returns {void} - Sends a JSON response with success or error details.
 *
 * @throws {Error} - Returns a 500 status code if a server error occurs.
 */
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ where: { email } });
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
    const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetPasswordToken}`;

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send to the user's email
      subject: 'Password Reset Request',
      text: `You requested a password reset. Click the link to reset your password: ${resetURL}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: 'Password reset email sent successfully',
      status: 'success',
    });
  } catch (error) {
    console.error("Forgot password error: ", error); // Log error for debugging
    return res.status(500).json({
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

module.exports = { registerUser, loginUser ,forgotPassword };
