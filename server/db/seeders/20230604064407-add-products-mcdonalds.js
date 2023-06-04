'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name:'Big Mac',
        price:4,
        shopId:1,
        image:'bigmac.jfif',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'McDouble',
        price:4.4,
        shopId:1,
        image:'202002_0592_McDouble_Alt_832x472_product-header-desktop.jfif',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Crispy Chicken',
        price:3.6,
        shopId:1,
        image:'DC_202012_0383_CrispyChickenSandwich_PotatoBun_832x472_product-header-mobile.jfif',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Fries',
        price:2.6,
        shopId:1,
        image:'DC_202002_8932_MediumFries_832x472_product-header-mobile.jfif',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Coca-cola',
        price:1.5,
        shopId:1,
        image:'DC_202112_0521_MediumCoke_Glass_832x472_product-header-mobile.jfif',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Fanta',
        price:4,
        shopId:1,
        image:'Header_MediumFantaOrange_Glass_832x472_product-header-mobile.jfif',
        createdAt:new Date,
        updatedAt:new Date
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', {shopId:1}, {});
  }
};
