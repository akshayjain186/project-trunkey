require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.LOCAL_PORT,
    db: {
      name: process.env.LOCAL_DB_NAME,
      user: process.env.LOCAL_DB_USER_NAME,
      password: process.env.LOCAL_DB_PASSWORD,
      host: process.env.LOCAL_DB_HOST,
    },
    jwtSecret: process.env.JWT_SECRET,
  },
  staging: {
    port: process.env.STAGING_PORT,
    db: {
      name: process.env.STAGING_DB_NAME,
      user: process.env.STAGING_DB_USER_NAME,
      password: process.env.STAGING_DB_PASSWORD,
      host: process.env.STAGING_DB_HOST,
    },
    jwtSecret: process.env.JWT_SECRET,
  },
  production: {
    port: process.env.PRODUCTION_PORT,
    db: {
      name: process.env.PRODUCTION_DB_NAME,
      user: process.env.PRODUCTION_DB_USER_NAME,
      password: process.env.PRODUCTION_DB_PASSWORD,
      host: process.env.PRODUCTION_DB_HOST,
    },
    jwtSecret: process.env.JWT_SECRET,
  },
};

module.exports = config[env];
