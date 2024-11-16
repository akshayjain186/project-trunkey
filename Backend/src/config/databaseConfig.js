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


///   kajal ///

// const { Sequelize } = require('sequelize');
// const config = require('./config');

// // Use the correct database settings based on NODE_ENV
// const { db } = config;

// const sequelize = new Sequelize(db.name, db.user, db.password, {
//   host: db.host,
//   dialect: 'mysql',
//   logging:false
// });

// module.exports = sequelize;


const { Sequelize } = require('sequelize');
const config = require('./config');

// Use the correct database settings based on NODE_ENV
const { db } = config;

const sequelize = new Sequelize(db.name, db.user, db.password, {
  host: db.host,
  dialect: 'mysql',
  logging: false, // Set to `true` for SQL query logging, or `false` to disable
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate(); // Authenticate the connection
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Run the connection test
testConnection();

module.exports = sequelize;

