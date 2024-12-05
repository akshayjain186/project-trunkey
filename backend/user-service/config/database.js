require('dotenv').config({ path: '../../shared/config/.env' });
const { Sequelize } = require('sequelize');

let sequelize = null; // Initialize with a placeholder value

if (process.env.DB_TYPE === 'sqlite') {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_NAME, // SQLite file path
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT || 3306, // Default MySQL port
    }
  );
}

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw new Error('Database connection failed'); // Throw an error instead of exiting
  }
})();

module.exports = { sequelize };
