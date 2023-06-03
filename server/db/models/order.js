'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Product,{through:models.ProductOrder, foreignKey:'orderId'})
    }
  }
  Order.init({
    userName: DataTypes.STRING,
    userEmail: DataTypes.STRING,
    userPhone: DataTypes.STRING,
    userAddress: DataTypes.STRING,
    shopAddress: DataTypes.STRING,
    totalPrice:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};