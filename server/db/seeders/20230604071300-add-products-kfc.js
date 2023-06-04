'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name:'Classic Bucket',
        price:12,
        shopId:2,
        image:'kubelki_2os-classic.png',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Haloumi Burger',
        price:5.3,
        shopId:2,
        image:'halloumi_burger_240x240.png',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'8 Hot Wings',
        price:6,
        shopId:2,
        image:'8-HotWings.png',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'3 pieces of Kentucky Chicken',
        price:2.6,
        shopId:2,
        image:'240x2403xtransparent.png',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Coca-cola',
        price:1.5,
        shopId:2,
        image:'DC_202112_0521_MediumCoke_Glass_832x472_product-header-mobile.jfif',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Fanta',
        price:4,
        shopId:2,
        image:'Header_MediumFantaOrange_Glass_832x472_product-header-mobile.jfif',
        createdAt:new Date,
        updatedAt:new Date
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', {shopId:2}, {});
  }
};
