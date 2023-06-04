'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Shops', [
        {
          name: `McDonald's`,
          createdAt:new Date,
          updatedAt:new Date
        },
      {
        name: 'KFC',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name: `Domino's pizza`,
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name: 'Pizza Hut',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name: 'Noodle Doodle',
        createdAt:new Date,
        updatedAt:new Date
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Shops', {name: [`McDonald's`,'KFC',`Domino's pizza`,'Pizza Hut','Noodle Doodle']}, {});
  }
};
