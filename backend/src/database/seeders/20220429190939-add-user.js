'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      { username: 'admin',  password:  'admin',  profileId: 2},
      { username: 'admin2', password: 'admin2',  profileId: 1}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category', null, {});
  }
};
