require('dotenv').config({ path: '../../shared/config/.env' });

const dbConfig = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE || 'sqlite',
    storage: process.env.DB_TYPE === 'sqlite' ? process.env.DB_NAME : undefined, // SQLite file path
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE || 'sqlite',
    storage: process.env.DB_TYPE === 'sqlite' ? process.env.DB_NAME : undefined, // SQLite file path
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE || 'sqlite',
    storage: process.env.DB_TYPE === 'sqlite' ? process.env.DB_NAME : undefined, // SQLite file path
  },
};

module.exports = dbConfig;
