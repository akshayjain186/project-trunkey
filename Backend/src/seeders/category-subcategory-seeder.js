const db = require('../config/databaseConfig'); 
const Category = require('../model/Categories');
const Subcategory = require('../model/Subcategories');

const categories = [
  {
    title: 'Carpenter and Building Tradesmen',
    subcategories: [
      { name: 'Bathroom', subcategory_type: 'Rooms Renovation' },
      { name: 'Washing room', subcategory_type: 'Rooms Renovation' },
      { name: 'Living room', subcategory_type: 'Rooms Renovation' },
      { name: 'Kitchen', subcategory_type: 'Rooms Renovation' },
      { name: 'Toilet', subcategory_type: 'Rooms Renovation' },
      { name: 'Bedroom', subcategory_type: 'Rooms Renovation' },
      { name: 'Children room', subcategory_type: 'Rooms Renovation' },
      { name: 'Technical room', subcategory_type: 'Outside Work' },
      { name: 'Storage room', subcategory_type: 'Outside Work' },
      { name: 'Hallway', subcategory_type: 'Rooms Renovation' },
      { name: 'Other', subcategory_type: 'Rooms Renovation' },
    ],
  },
  {
    title: 'Cleaner',
    subcategories: [
      { name: 'Bathroom', subcategory_type: 'Rooms Renovation' },
      { name: 'Living room', subcategory_type: 'Rooms Renovation' },
      { name: 'Kitchen', subcategory_type: 'Rooms Renovation' },
      { name: 'Other', subcategory_type: 'Rooms Renovation' },
    ],
  },
  {
    title: 'Demolition, Tiling, and Concrete Sawing',
    subcategories: [
      { name: 'Bathroom', subcategory_type: 'Rooms Renovation' },
      { name: 'Technical room', subcategory_type: 'Outside Work' },
      { name: 'Storage room', subcategory_type: 'Outside Work' },
      { name: 'Other', subcategory_type: 'Rooms Renovation' },
    ],
  },
  {
    title: 'Electrician',
    subcategories: [
      { name: 'Technical room', subcategory_type: 'Outside Work' },
      { name: 'Living room', subcategory_type: 'Rooms Renovation' },
      { name: 'Hallway', subcategory_type: 'Rooms Renovation' },
      { name: 'Other', subcategory_type: 'Rooms Renovation' },
    ],
  },
  {
    title: 'Foundation and Landscaping Worker',
    subcategories: [
      { name: 'Ground work', subcategory_type: 'Outside Work' },
      { name: 'New home', subcategory_type: 'New Building' },
      { name: 'Superstructure and extension', subcategory_type: 'New Building' },
      { name: 'Build a garage', subcategory_type: 'New Building' },
    ],
  },
  {
    title: 'Glass Master and Glazier',
    subcategories: [
      { name: 'Bathroom', subcategory_type: 'Rooms Renovation' },
      { name: 'Living room', subcategory_type: 'Rooms Renovation' },
      { name: 'Kitchen', subcategory_type: 'Rooms Renovation' },
      { name: 'Other', subcategory_type: 'Rooms Renovation' },
    ],
  },
  {
    title: 'Plumber',
    subcategories: [
      { name: 'Bathroom', subcategory_type: 'Rooms Renovation' },
      { name: 'Kitchen', subcategory_type: 'Rooms Renovation' },
      { name: 'Toilet', subcategory_type: 'Rooms Renovation' },
      { name: 'Other', subcategory_type: 'Rooms Renovation' },
    ],
  },
  {
    title: 'Roofer and Tinsmith',
    subcategories: [
      { name: 'Roofing', subcategory_type: 'Outside Work' },
      { name: 'Facade', subcategory_type: 'Outside Work' },
      { name: 'Other', subcategory_type: 'Outside Work' },
    ],
  },
  {
    title: 'Tiler, Bricklayer, and Plastering',
    subcategories: [
      { name: 'Living room', subcategory_type: 'Rooms Renovation' },
      { name: 'Storage room', subcategory_type: 'Outside Work' },
      { name: 'Hallway', subcategory_type: 'Rooms Renovation' },
      { name: 'Other', subcategory_type: 'Rooms Renovation' },
    ],
  },
];

const seedCategoriesAndSubcategories = async () => {
  try {
    console.log('Connecting to the database...');
    await db.authenticate();
    console.log('Database connected successfully.');

    for (const categoryData of categories) {
      const [categoryInstance] = await Category.findOrCreate({
        where: { name: categoryData.title },
      });
      for (const subcategoryData of categoryData.subcategories) {
        await Subcategory.create({
          name: subcategoryData.name,
          subcategory_type: subcategoryData.subcategory_type,
          categoryId: categoryInstance.id,
        });
      }
    }
    console.log('Categories and subcategories seeded successfully!');
  } catch (error) {
    console.error('Error seeding categories and subcategories:', error);
  }
};

module.exports=seedCategoriesAndSubcategories;
