// src/seeders/seed.js

const seedRoles = require('./role-seeder');
const seedAdmin = require('./admin-seeder');
const seedprojectManageRole = require('./projectrole-seeder');
const sequelize = require('../config/databaseConfig');


(async () => {
  try {
    // Connect to MySQL and sync the database
    await sequelize.authenticate();
    console.log('MySQL connected');

    // Sync all models to the database
    await sequelize.sync({ force: true }); // Use { force: true } to drop and recreate tables if needed

    // Run seeders in sequence
    await seedRoles();
    await seedAdmin();
    await seedprojectManageRole();

    console.log('Seeding completed');
  } catch (error) {
    console.error('MySQL connection error:', error);
  } finally {
    await sequelize.close();
  }
})();
