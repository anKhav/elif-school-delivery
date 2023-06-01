'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.Order,{through:models.ProductOrder, foreignKey:'productId'})
      Product.belongsTo(models.Shop)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    shopId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};