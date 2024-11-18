const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');
const Category = require('./Categories');
// const Category = require('./Category'); // Import the Category model

const Subcategory = sequelize.define('Subcategory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
},
    {
        timestamps: true,
        tableName: 'subcategories',
    }
);

Subcategory.belongsTo(Category, { foreignKey: 'CategoryId', as: 'category' });

module.exports = Subcategory;
