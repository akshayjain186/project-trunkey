const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const UserAccount = require("../model/User");
const Role = require("../model/role");
const {
  generateRefreshToken,
  generateAccessToken,
} = require("../utils/tokens");

const register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      dob,
      gender,
      email,
      password,
      language,
      country,
      countryCode,
      phone,
      roleName,
      address,
    } = req.body;

    const existingUser = await UserAccount.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        message: "Email address already exists",
        status: "error",
      });
    }

    const role = await Role.findOne({
      where: { machineName: roleName || "StandardUser" },
    });
    if (!role) {
      return res.status(500).json({
        message: "Standard User role not found",
        status: "error",
      });
    }

    // const hashedPassword = await bcrypt.hash(password, 8);

    const userAccount = await UserAccount.create({
      firstName,
      lastName,
      userName,
      dob,
      gender,
      email,
      password,
      language,
      country,
      phone,
      address,
      countryCode,
      roleId: role.id,
      isUser: !roleName,
    });

    res.status(201).json({
      message: "User account created successfully",
      status: "success",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password, phone } = req.body;

    if (phone) {
      const user = await UserAccount.findOne({ where: { phone } });
      if (!user) {
        return res.status(400).send({
          message: "Phone number not registered.",
          status: "error",
        });
      }

      const otp = Math.floor(100000 + Math.random() * 900000);
      user.verificationOtp = otp;
      user.verificationExpires = new Date(Date.now() + 15 * 60 * 1000);
      await user.save();

      return res.status(200).send({
        message: "OTP sent successfully. Please verify to log in.",
        otp, // For testing purposes; remove in production
      });
    } else if (email && password) {
      const userAccount = await UserAccount.findOne({ where: { email } });
      if (!userAccount) {
        return res.status(400).send({
          message: "Invalid email or password.",
          status: "error",
        });
      }

      // Use the instance method to compare passwords
      const validPassword = await userAccount.comparePassword(password);
      if (!validPassword) {
        return res.status(400).send({
          message: "Invalid email or password.",
          status: "error",
        });
      }

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

module.exports = { register, login };
