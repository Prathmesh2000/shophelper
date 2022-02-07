'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[{
      id: uuidv4(),
      name: 'default admin',
      user_name: 'default admin',
      password: 'password',
      access: JSON.stringify({
        read: true,
        write: true
      })
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
