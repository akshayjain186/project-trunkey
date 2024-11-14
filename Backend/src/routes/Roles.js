const express = require('express');
const Role = require('../model/role');
const router = express.Router();

// Get all Roles
router.get('/', async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({
      message: 'Roles fetched successfully',
      status: 'success',
      data: roles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching roles', error });
  }
});

// Get a specific Role by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findById(id);

    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    res.status(200).json({
      message: 'Role fetched successfully',
      status: 'success',
      data: role,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching role', error });
  }
});

// Update a Role by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description, permissions } = req.body;

    const role = await Role.findByIdAndUpdate(
      id,
      { description, permissions },
      { new: true }
    );

    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    res.status(200).json({ message: 'Role updated successfully', role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating role', error });
  }
});

module.exports = router;
