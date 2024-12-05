module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Userinfo', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        userId:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        postal_code: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        continent_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        country_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        currency_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        language_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        organization_number: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Userinfo');
    },
  };