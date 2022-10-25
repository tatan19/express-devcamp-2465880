'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'smorales441@misena',
      password: '1234'
    },
    {
      name: 'Sebastian',
      email: 'sebastianm441@misena',
      password: '5678'
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    
     
      
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
