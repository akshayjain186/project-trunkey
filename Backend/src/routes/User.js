const express = require('express');
const router = express.Router();
// const authorize = require('../middlewares/authorize');
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
const {
  register,
  login
} = require('../controller/User');


//Register
router.post(
  '/register',
  // upload.single('identityCardImage'),
  register
);

//login with phone or Email
router.post('/login', login);

module.exports = router;
