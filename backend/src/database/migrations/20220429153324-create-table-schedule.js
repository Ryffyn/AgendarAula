'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('schedule', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      teacher: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('schedule')
  }
};
