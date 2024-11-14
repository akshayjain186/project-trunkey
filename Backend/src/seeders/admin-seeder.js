
const Role = require('../model/role');
const User = require('../model/User');

const seedAdmin = async () => {
  try {
    // Find the Administrator role
    const adminRole = await Role.findOne({ where: { name: 'Administrator' } });
    if (!adminRole) {
      throw new Error('Administrator role not found');
    }

    // Define the admin user data
    const adminUser = {
      firstName: 'Admin',
      lastName: 'admin',
      email: 'admin@gmail.com',
      password: "123456", // Hash the password
      language: 'English',
      country: 'USA',
      phone: '12345678',
      countryCode: '+91',
      category: 'Administrator',
      roleId: adminRole.id, // Associate with the Administrator role
      isUser: false,
    };

    // Use findOrCreate to avoid duplicate records
    const [user, created] = await User.findOrCreate({
      where: { email: adminUser.email },
      defaults: adminUser, // Insert if not found
    });

    if (created) {
      console.log('Admin user seeded successfully');
    } else {
      console.log('Admin user already exists');
    }
  } catch (err) {
    console.error('Error seeding admin:', err);
  }
};

module.exports = seedAdmin;
