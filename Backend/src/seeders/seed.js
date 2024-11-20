const seedRoles = require('./role-seeder');
const seedAdmin = require('./admin-seeder');
const seedCategoriesAndSubcategories = require('./category-subcategory-seeder');
const sequelize = require('../config/databaseConfig');

(async () => {
  try {
    // Connect to MySQL and sync the database
    await sequelize.authenticate();
    console.log('MySQL connected');

    await sequelize.sync({ force: true });

    // Run seeders in sequence
    await seedRoles();
    await seedAdmin();
    await seedCategoriesAndSubcategories();

    console.log('Seeding completed');
    
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await sequelize.close();
  }
})();
