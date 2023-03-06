'use strict';

/**@type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.createTable('categories', {
         id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
         name: {
          type: Sequelize.STRING,
         },
        });
     
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.dropTable('users');
     
  }
};
