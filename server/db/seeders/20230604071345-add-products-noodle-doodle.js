

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name:'Wok Pork in Kim Ji XXL',
        price:11.2,
        shopId:5,
        image:'880362e9-a4fe-11e7-a1fd-000c29b4c5f1.png',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Noodle Caesar salad',
        price:9.2,
        shopId:5,
        image:'12e909f4-e88b-11e6-80cb-6431504f2928.png',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Hiyashi salad with vegetables',
        price:6,
        shopId:5,
        image:'2ffdc0bf-e88b-11e6-80cb-6431504f2928.png',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Noodle Soup Tom Yam',
        price:11.1,
        shopId:5,
        image:'502ff2e7-9729-11e9-a208-000c290f1485.png',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Passion Fruit Lemonade 0.3L',
        price:1.8,
        shopId:5,
        image:'50ba2ee1-85a4-11e9-a205-000c290f1485.png',
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        name:'Lemonade Mango 0.3L',
        price:1.8,
        shopId:5,
        image:'b048408d-beed-11e8-a23a-000c29b4c5f1.png',
        createdAt:new Date,
        updatedAt:new Date
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', {shopId:5}, {});
  }
};

