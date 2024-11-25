const express = require('express');
const router = express.Router();
const {
  createProjectManagerRole,
  getAllProjectManagerRoles,
  getProjectManagerRoleById,
  updateProjectManagerRole,
  deleteProjectManagerRole,
} = require('../controller/ProjectmanageroleController'); // Import the controller methods

// Create a new role
router.post('/add', createProjectManagerRole);

// Get all roles
router.get('/fetch', getAllProjectManagerRoles);

// Get a role by ID
router.get('/fetch/:id', getProjectManagerRoleById);

// Update a role by ID
router.put('/update/:id', updateProjectManagerRole);

// Delete a role by ID
router.delete('/delete/:id', deleteProjectManagerRole);

module.exports = router;
