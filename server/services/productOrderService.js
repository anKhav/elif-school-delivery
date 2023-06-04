const {ProductOrder, Product} = require('../db/models')
const ProductService = require('../services/productService.js')
const {where} = require("sequelize");
class ProductOrderService {
    async createProductOrder (productId, orderId, amount) {
        const productOrder = await ProductOrder.create({productId, orderId, amount})
        console.log(productOrder);
        const product = await ProductService.get(productOrder.dataValues.productId)

        return product
    }
    async getProductOrder (orderId) {
        const productOrders =  await ProductOrder.findAll({where:{orderId}})
        console.log([...productOrders])
        return [...productOrders]
    }

}

module.exports = new ProductOrderService()