const Category = require('../model/Categories');

// Create Category
const createCategory = async (req, res, next) => {
  try {
    const { title } = req.body;

    const existingCategory = await Category.findOne({ where: { title } });
    if (existingCategory) {
      return res.status(400).json({
        message: 'Category with this title already exists',
        status: 'error',
      });
    }
    const newCategory = await Category.create({ title });

    return res.status(201).json({
      message: 'Category created successfully',
      status: 'success',
      data: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error creating category',
      error: error.message,
    });
  }
};
// Get Categories Details
const getCategoriesDetails = async (req, res) => {
  try {
    // Fetch all categories
    const allCategories = await Category.findAll();

    if (!allCategories.length) {
      return res.status(404).json({
        statusCode: 404,
        status: true,
        data: [],
        message: 'Categories not found',
      });
    }

    // Fetch all subcategories
    const findSubcategories = await Subcategory.findAll();

    return res.status(200).json({
      statusCode: 200,
      status: true,
      data: {
        categories: allCategories,
        subcategories: findSubcategories,
      },
      message: 'Categories and subcategories fetched successfully',
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      status: false,
      error: error.message,
    });
  }
};
// Update Category
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    // Find and update category by ID
    const updatedCategory = await Category.update(
      { title },
      { where: { id }, returning: true }
    );

    if (updatedCategory[0] === 0) {
      return res.status(404).json({
        message: 'Category not found',
        status: 'error',
      });
    }

    res.status(200).json({
      message: 'Category updated successfully',
      status: 'success',
      data: updatedCategory[1][0], 
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating category',
      error: error.message,
    });
  }
};
// Delete Category
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete category by ID
    const deleteCategory = await Category.destroy({ where: { id } });

    if (deleteCategory === 0) {
      return res.status(404).json({
        message: 'Category not found',
        status: 'error',
      });
    }

    res.status(200).json({
      message: 'Category deleted successfully',
      status: 'success',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error while deleting category',
      status: 'error',
      error: error.message,
    });
  }
};

module.exports = {
  createCategory,
  getCategoriesDetails,
  updateCategory,
  deleteCategory,
};
