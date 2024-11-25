const Subcategory = require('../model/Subcategories'); // Sequelize model
const Category = require('../model/Categories'); // Sequelize model

const createSubcategory = async (req, res, next) => {
    try {
        const { name, subcategory_type, CategoryId } = req.body;

        // Check if subcategory_type is provided
        if (!subcategory_type) {
            return res.status(400).json({
                message: 'Subcategory type is required.',
                status: 'error',
            });
        }

        // Check if the parent category exists
        const parentCategory = await Category.findByPk(CategoryId); // `findByPk` is used for finding by primary key
        if (!parentCategory) {
            return res.status(400).json({
                message: 'Parent category not found',
                status: 'error',
            });
        }

        // Check if the subcategory with the same name already exists under the parent category
        const existingSubcategory = await Subcategory.findOne({
            where: { name, subcategory_type, CategoryId },
        });
        if (existingSubcategory) {
            return res.status(400).json({
                message: 'Subcategory with this name already exists under the specified parent category',
                status: 'error',
            });
        }

        // Create a new subcategory
        const newSubcategory = await Subcategory.create({
            name,
            subcategory_type,
            CategoryId,
        });

        res.status(201).json({
            message: 'Subcategory created successfully',
            status: 'success',
            data: newSubcategory,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error creating subcategory',
            error: error.message,
        });
    }
};

const getSubcategory = async (req, res, next) => {
    try {
        // const { CategoryId } = req.params;

        // // Check if the parent category exists
        // const parentCategory = await Category.findByPk(CategoryId);

        // if (!parentCategory) {
        //     return res.status(404).json({
        //         message: 'Parent category not found',
        //         status: 'error',
        //     });
        // }

        // Find all subcategories associated with the given CategoryId
        const { id } = req.params;
        const subcategories = await Subcategory.findByPk(id);

        if (!subcategories) {
            return res.status(404).json({
                message: 'subcategories not found',
                status: 'error',
            });
        }

        res.status(200).json({
            message: 'Subcategories fetched successfully',
            status: 'success',
            data: subcategories,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching subcategories',
            error: error.message,
        });
    }
};

const getAllSubcategory = async (req, res, next) => {
    try {
        const subcategories = await Subcategory.findAll();

        if (!subcategories.length) {
            return res.status(404).json({
                message: 'No subcategories found',
                status: 'error',
            });
        }

        res.status(200).json({
            message: 'Subcategories fetched successfully',
            status: 'success',
            data: subcategories,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching subcategories',
            error: error.message,
        });
    }
};

const updateSubcategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const{subcategory_type}=req.body;

        const subcategory = await Subcategory.findByPk(id);
        if (!subcategory) {
            return res.status(404).json({
                message: 'Subcategory not found',
                status: 'error',
            });
        }

        // Update the name if provided
        if (name) {
            const existingSubcategory = await Subcategory.findOne({
                where: { name,subcategory_type, CategoryId: subcategory.CategoryId },
            });
            if (existingSubcategory && existingSubcategory.id !== id) {
                return res.status(400).json({
                    message: 'A subcategory with this name already exists under the specified parent category',
                    status: 'error',
                });
            }
            subcategory.name = name;
        }

        await subcategory.save();
        res.status(200).json({
            message: 'Subcategory updated successfully',
            status: 'success',
            // data:'existingSubcategory'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating subcategory',
            error: error.message,
        });
    }
};

const deleteSubcategory = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedSubcategory = await Subcategory.destroy({
            where: { id },
        });
        if (!deletedSubcategory) {
            return res.status(404).json({
                message: 'Subcategory not found',
                status: 'error',
            });
        }

        res.status(200).json({
            message: 'Subcategory deleted successfully',
            status: 'success',
            data:'deletedSubcategory',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting subcategory',
            error: error.message,
        });
    }
};

module.exports = {
    createSubcategory,
    getSubcategory,
    getAllSubcategory,
    updateSubcategory,
    deleteSubcategory,
};
