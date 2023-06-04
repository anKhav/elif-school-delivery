

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name:'Margherita Pizza',
        price:10,
        shopId:4,
        image:'PH_314x314_margherita-min_.jpg',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Pepperoni Pizza',
        price:10.8,
        shopId:4,
        image:'PH_314x314_pepperoni-min_.jpg',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Greek Pizza',
        price:11.7,
        shopId:4,
        image:'grecka_500x500.jpg',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Prosciutto E Rucola Pizza',
        price:12.8,
        shopId:4,
        image:'PH_314x314_prosciutto-min_.jpg',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Mirinda 0.3L',
        price:2,
        shopId:4,
        image:'mirinda_500x500-min.jpg',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Lemonade 0.3',
        price:2.2,
        shopId:4,
        image:'lemoniada 500x500-min.jpg',
        createdAt:new Date,
        updatedAt:new Date
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', {shopId:4}, {});
  }
};

