const db = require('../config/databaseConfig'); 
const Category = require('../model/categoryModel');
const Subcategory = require('../model/subcategoryModel');

const categories = [
  {
    name: 'Carpenter and Building Tradesmen',
    subcategories: [
      'Bathroom',
      'Washing room',
      'Living room',
      'Kitchen',
      'Toilet',
      'Bedroom',
      'Children room',
      'Technical room',
      'Storage room',
      'Hallway',
      'Other',
    ],
  },
  {
    name: 'Cleaner',
    subcategories: ['Bathroom', 'Living room', 'Kitchen', 'Other'],
  },
  {
    name: 'Demolition, Tiling, and Concrete Sawing',
    subcategories: ['Bathroom', 'Technical room', 'Storage room', 'Other'],
  },
  {
    name: 'Electrician',
    subcategories: ['Technical room', 'Living room', 'Hallway', 'Other'],
  },
  {
    name: 'Plumber',
    subcategories: ['Bathroom', 'Kitchen', 'Toilet', 'Other'],
  },
  {
    name: 'Tiler, Bricklayer, and Plastering',
    subcategories: ['Hallway', 'Living room', 'Storage room', 'Other'],
  },
];
console.log(categories)

const seedCategoriesAndSubcategories = async () => {
  try {
    console.log('Connecting to the database...');
    await db.authenticate();
    console.log('Database connected successfully.');

    for (const categoryData of categories) {
      const [categoryInstance] = await Category.findOrCreate({
        where: { name: categoryData.name }, 
        defaults: { name: categoryData.name }, 
      });

      for (const subcategoryData of categoryData.subcategories) {
        await Subcategory.findOrCreate({
          where: {
            name: subcategoryData,
            CategoryId: categoryInstance.id, 
          },
          defaults: {
            name: subcategoryData,
            CategoryId: categoryInstance.id,
          },
        });
      }
    }

    console.log('Categories and Subcategories seeded successfully!');
  } catch (error) {
    console.error('Error seeding categories and subcategories:', error);
  }
};

module.exports = seedCategoriesAndSubcategories;
