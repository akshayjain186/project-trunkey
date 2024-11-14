// const { Sequelize } = require('sequelize');

// require('dotenv').config();
// const sequelize = new Sequelize(
//   process.env.LOCAL_DB_NAME,
//   process.env.LOCAL_DB_USER_NAME,
//   process.env.LOCAL_DB_PASSWORD,
//   {
//     host: process.env.LOCAL_DB_HOST,
//     dialect: 'mysql',
//   }
// );
// module.exports = sequelize;

const { Sequelize } = require('sequelize');
const config = require('./config');

// Use the correct database settings based on NODE_ENV
const { db } = config;

const sequelize = new Sequelize(db.name, db.user, db.password, {
  host: db.host,
  dialect: 'mysql',
});

module.exports = sequelize;
