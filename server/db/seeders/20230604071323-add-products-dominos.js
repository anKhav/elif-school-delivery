

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name:'Indian Chicken Tikka Masala',
        price:11,
        shopId:3,
        image:'Domino-s-Pizza-Tikka-Masala_1218401_396x0.webp',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Italian Chicken',
        price:11.2,
        shopId:3,
        image:'Domino-s-Pizza-Italian-Pizza-Chicken_1284119_396x0.webp',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Diavolina',
        price:6,
        shopId:3,
        image:'792x792-diavola_1_1218229_396x0.webp',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Texas BBQ',
        price:2.6,
        shopId:3,
        image:'792x792-bbq_1_1169800_396x0.webp',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Pepsi 0.5L',
        price:2,
        shopId:3,
        image:'Domino-s-Pizza-Pepsi-0,5_166199_396x0.webp',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'7Up 0.85L',
        price:2.4,
        shopId:3,
        image:'792x792_7up_190705_396x0.webp',
        createdAt:new Date,
        updatedAt:new Date
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', {shopId:3}, {});
  }
};

