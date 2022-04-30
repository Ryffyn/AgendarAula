'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('profile', [
      { id: 1, profile: 'TEACHER'},
      { id: 2, profile: 'STUDENT'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profile', null, {});
  }
};
