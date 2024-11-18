const projectmanagerole = require('../model/Projectmanagerole');  // Import the model

// Create a new Project Manager Role
const createProjectManagerRole = async (req, res) => {
    try {
        const { name, machineName, description } = req.body;

        // Validate required fields
        if (!name || !machineName) {
            return res.status(400).json({
                statusCode: 400,
                message: 'Name and Machine Name are required',
                status: 'error',
            });
        }

        // Create a new project manager role
        const newRole = await projectmanagerole.create({
            name,
            machineName,
            description,
        });

        res.status(201).json({
            message: 'Project Manager Role created successfully',
            data: newRole,
            status: 'success',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while creating the project manager role',
            status: 'error',
            error: error.message,
        });
    }
};

// Get all Project Manager Roles
const getAllProjectManagerRoles = async (req, res) => {
    try {
        const roles = await projectmanagerole.findAll();

        if (roles.length === 0) {
            return res.status(200).json({
                message: 'No project manager roles found',
                statusCode: 200,
                status: 'success',
                data: [],
            });
        }

        res.status(200).json({
            message: 'Fetched all project manager roles successfully',
            statusCode: 200,
            data: roles,
            status: 'success',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error fetching project manager roles',
            error: error.message,
        });
    }
};

// Get Project Manager Role by ID
const getProjectManagerRoleById = async (req, res) => {
    try {
        const { id } = req.params;

        const role = await projectmanagerole.findByPk(id);

        if (!role) {
            return res.status(404).json({
                message: 'Project Manager Role not found',
                statusCode: 404,
                status: 'error',
            });
        }

        res.status(200).json({
            message: 'Fetched project manager role successfully',
            statusCode: 200,
            data: role,
            status: 'success',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error fetching project manager role',
            error: error.message,
        });
    }
};

// Update Project Manager Role
const updateProjectManagerRole = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, machineName, description } = req.body;

        // Find role by ID
        const role = await projectmanagerole.findByPk(id);

        if (!role) {
            return res.status(404).json({
                message: 'Project Manager Role not found',
                statusCode: 404,
                status: 'error',
            });
        }

        // Update the role
        role.name = name || role.name;
        role.machineName = machineName || role.machineName;
        role.description = description || role.description;

        await role.save();

        res.status(200).json({
            message: 'Project Manager Role updated successfully',
            data: role,
            status: 'success',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while updating the project manager role',
            error: error.message,
        });
    }
};

// Delete Project Manager Role
const deleteProjectManagerRole = async (req, res) => {
    try {
        const { id } = req.params;

        const role = await projectmanagerole.findByPk(id);

        if (!role) {
            return res.status(404).json({
                message: 'Project Manager Role not found',
                statusCode: 404,
                status: 'error',
            });
        }

        await role.destroy();

        res.status(200).json({
            message: 'Project Manager Role deleted successfully',
            status: 'success',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while deleting the project manager role',
            error: error.message,
        });
    }
};

module.exports = {
    createProjectManagerRole,
    getAllProjectManagerRoles,
    getProjectManagerRoleById,
    updateProjectManagerRole,
    deleteProjectManagerRole,
};
