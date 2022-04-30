'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('profile', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      profile: {
        type: Sequelize.STRING(50),
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('profile')
  }
};
