const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
// const Role = require('../model/role');
// const upload = require('../config/multerS3Config');
// const passport = require('passport');
require('./../config/passport-setup');
// const upload = require('../middlewares/upload');
// const{ upload }= require('../middlewares/upload');

// const {
//   generateAccessToken,
//   generateRefreshToken,
// } = require('../utils/tokens');
const { register, login, forgotPassword, resetPassword, editProfile ,getProfile,getAllProfiles} = require('../controller/User');


//Register
router.post(
  '/register',
  // upload.single('identityCardImage'),
  register
);

//login with phone or Email
router.post('/login', login);

//forgot password
router.post('/forgot-password', forgotPassword);

//reset password
router.post('/reset-password', resetPassword);

// router.put('/edit-profile/:id', editProfile);

// //get profile
// router.get('/profile/:id', getProfile);

// // router.get('/profile',authorize(), getProfile);

// //get profile of all
// router.get('/profile', getAllProfiles);

module.exports = router;
