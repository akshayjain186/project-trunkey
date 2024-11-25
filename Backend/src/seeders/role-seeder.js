const Role = require("../model/role");


const roles = [
  {
    name: 'Administrator',
    machineName: 'Administrator',
    description: 'Full access to all functionalities',
    permissions: JSON.stringify({
      manageUsers: true,
      manageRoles: true,
      manageContent: true,
      manageStores: true,
      manageTickets: true,
      viewAllData: true,
      sendNotifications: true,
      modifySourceCode: true,
    }),
  },
  {
    name: 'User',
    machineName: 'User',
    description: 'Regular user with basic access',
    permissions: JSON.stringify({
      manageUsers: false,
      manageRoles: false,
      manageContent: false,
      manageStores: false,
      manageTickets: false,
      viewAllData: false,
      sendNotifications: false,
      modifySourceCode: false,
    }),
  },
  {
    name: 'SuperAdmin',
    machineName: 'SuperAdmin',
    description: 'Full access to all functionalities',
    permissions: JSON.stringify({
      manageUsers: true,
      manageRoles: true,
      manageContent: true,
      manageStores: true,
      manageTickets: true,
      viewAllData: true,
      sendNotifications: true,
      modifySourceCode: true,
    }),
  },
  {
    name: 'Manager',
    machineName: 'Manager',
    description: 'Full access to all functionalities',
    permissions: JSON.stringify({
      manageUsers: true,
      manageRoles: true,
      manageContent: false,
      manageStores: false,
      manageTickets: false,
      viewAllData: true,
      sendNotifications: false,
      modifySourceCode: false,
    }),
  },
];

const seedRoles = async () => {
  try {
    for (const roleData of roles) {
      // Use findOrCreate to avoid duplicates
      await Role.findOrCreate({
        where: { machineName: roleData.machineName },
        defaults: roleData, // Insert if not found
      });
    }
    console.log('Roles seeded successfully');
  } catch (err) {
    console.error('Error seeding roles:', err);
  }
};

module.exports = seedRoles;
