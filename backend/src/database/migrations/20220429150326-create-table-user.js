'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      profileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'profile',
          key: 'id'
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user')
  }
};
