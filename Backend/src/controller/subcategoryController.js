const Subcategory = require('../model/subcategoryModel');
const Category = require('../model/categoryModel'); 

/**
 * Creates multiple subcategories under a specified category.
 * Ensures no duplicate subcategories for the same category.
 * 
 * @param {Object} req - Request object containing categoryId and subcategories list.
 * @param {Object} res - Response object to send the results.
 */


const createSubcategories = async (req, res) => {
    try {
        const { categoryId, subcategories } = req.body;

        // Validate input
        if (!categoryId || !subcategories || !Array.isArray(subcategories) || subcategories.length === 0) {
            return res.status(400).json({
                message: 'categoryId and subcategories array are required.',
                status: 'error',
            });
        }

        const parentCategory = await Category.findByPk(categoryId);
        if (!parentCategory) {
            return res.status(404).json({
                message: 'Parent category not found.',
                status: 'error',
            });
        }

        const existingSubcategories = await Subcategory.findAll({
            where: {
                name: subcategories,
                CategoryId: categoryId,
            },
        });

        const existingNames = existingSubcategories.map(sub => sub.name);

        const newSubcategories = subcategories.filter(name => !existingNames.includes(name));

        if (newSubcategories.length === 0) {
            return res.status(400).json({
                message: 'All subcategories already exist for this category.',
                status: 'error',
            });
        }

        const subcategoryData = newSubcategories.map(name => ({
            name,
            CategoryId: categoryId,
        }));

        const createdSubcategories = await Subcategory.bulkCreate(subcategoryData);

        const allSubcategories = [...existingSubcategories, ...createdSubcategories];

        res.status(201).json({
            message: 'Subcategories created successfully!',
            status: 'success',
            data: allSubcategories,
        });
    } catch (error) {
        console.error('Error creating subcategories:', error);  
        res.status(500).json({
            message: 'Error creating subcategories.',
            status: 'error',
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
                where: { name, CategoryId: subcategory.CategoryId },
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
    createSubcategories,
    getSubcategory,
    getAllSubcategory,
    updateSubcategory,
    deleteSubcategory,
};
