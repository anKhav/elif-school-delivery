const {ProductOrder, Product} = require('../db/models')
const ProductService = require('../services/productService.js')
const {where} = require("sequelize");
class ProductOrderService {
    async createProductOrder (productId, orderId, amount) {
        const productOrder = await ProductOrder.create({productId, orderId, amount})
        const product = await ProductService.get(productOrder.dataValues.productId)

        return product
    }
    async getProductOrder (orderId) {
        const productOrders =  await ProductOrder.findAll({where:{orderId}})
        console.log('productOrders'+productOrders)
        const products  = await Promise.all(productOrders.map(async (product) => {
            console.log('product.dataValues.productId'+product.dataValues.productId)
            const productData = await ProductService.get(product.dataValues.productId)
            return {...productData.dataValues, amount:product.amount}
        }));
        return products
    }

}

module.exports = new ProductOrderService()