// // passport-setup.js
// const passport = require('passport');
// const User = require('../model/User');
// const Role = require('../model/role');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
// const AppleStrategy = require('passport-apple').Strategy;
// require('dotenv').config();

// // Configure Passport with Google strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: 'http://localhost:5001/api/v1/users/auth/google/callback',
//       scope: ['profile', 'email'],
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       console.log('profile', profile);
//       const existingUser = await User.findOne({ googleId: profile.id });
//       if (existingUser) {
//         return done(null, existingUser);
//       }

//       const role = await Role.findOne({
//         name: 'StandardUser',
//       });
//       if (!role) {
//         return res.status(500).json({
//           message: 'Standard User role not found',
//           status: 'error',
//         });
//       }

//       const newUser = await new User({
//         googleId: profile.id,
//         userName: '',
//         firstName: profile.name.givenName,
//         lastName: profile.name.familyName,
//         email: profile.emails[0].value,
//         role: role._id,
//         isUser: true,
//       }).save();

//       done(null, newUser);
//     }
//   )
// );

// // Configure Passport with Facebook strategy
// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FACEBOOK_CLIENT_ID,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//       callbackURL: 'http://localhost:5001/api/v1/users/auth/facebook/callback',
//       profileFields: ['id', 'emails', 'name'],
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const existingUser = await User.findOne({
//         facebookId: profile.id,
//       });
//       if (existingUser) {
//         return done(null, existingUser);
//       }

//       const newUser = await new User({
//         facebookId: profile.id,
//         firstName: profile.name.givenName,
//         lastName: profile.name.familyName,
//         emailAddress: profile.emails[0].value,
//       }).save();

//       done(null, newUser);
//     }
//   )
// );

// // Configure Passport with Apple strategy
// passport.use(
//   new AppleStrategy(
//     {
//       clientID: process.env.APPLE_CLIENT_ID,
//       teamID: process.env.APPLE_TEAM_ID,
//       keyID: process.env.APPLE_KEY_ID,
//       privateKeyLocation: './path/to/AuthKey_XXXXXX.p8',
//       callbackURL: 'http://localhost:5001/api/v1/users/auth/apple/callback',
//     },
//     async (accessToken, refreshToken, idToken, profile, done) => {
//       const existingUser = await User.findOne({ appleId: profile.sub });
//       if (existingUser) {
//         return done(null, existingUser);
//       }

//       const newUser = await new User({
//         appleId: profile.sub,
//         emailAddress: profile.email,
//       }).save();

//       done(null, newUser);
//     }
//   )
// );

// passport.serializeUser((user, done) => done(null, user.id));
// passport.deserializeUser((id, done) => User.findById(id, done));
