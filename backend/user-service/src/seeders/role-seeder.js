const Role = require("../models/roleModel");

const roles = [
  {
    name: 'Control Admin',
    machineName: 'control_admin',
    description: 'Complete access to all functionalities across the system',
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
    name: 'Country Admin',
    machineName: 'country_admin',
    description: 'Full administrative access for their respective country',
    permissions: JSON.stringify({
      manageUsers: true,
      manageRoles: true,
      manageContent: true,
      manageStores: true,
      manageTickets: true,
      viewAllData: true,
      sendNotifications: true,
      modifySourceCode: false,
    }),
  },
  {
    name: 'Super Admin',
    machineName: 'super_admin',
    description: 'Full access to oversee global operations',
    permissions: JSON.stringify({
      manageUsers: true,
      manageRoles: true,
      manageContent: true,
      manageStores: true,
      manageTickets: true,
      viewAllData: true,
      sendNotifications: true,
      modifySourceCode: false,
    }),
  },
  {
    name: 'Admin',
    machineName: 'admin',
    description: 'Administrative access with limited control over system settings',
    permissions: JSON.stringify({
      manageUsers: true,
      manageRoles: false,
      manageContent: true,
      manageStores: true,
      manageTickets: true,
      viewAllData: true,
      sendNotifications: true,
      modifySourceCode: false,
    }),
  },
  {
    name: 'User',
    machineName: 'user',
    description: 'Regular user with basic access rights',
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
];

const seedRoles = async () => {
  try {
    for (const roleData of roles) {
      await Role.findOrCreate({
        where: { machineName: roleData.machineName },
        defaults: roleData,
      });
    }
    console.log('Roles seeded successfully');
  } catch (err) {
    console.error('Error seeding roles:', err);
  }
};

module.exports = seedRoles;
