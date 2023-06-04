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
        console.log('productOrders' + productOrders)
        const products  = await Promise.all(productOrders.map(async (product) => {
            const productData = await ProductService.get(product.dataValues.productId)
            console.log('productData' + productData)
            return {...productData.dataValues, amount:product.amount}
        }));
        console.log('products' + productOrders)
        return products
    }

}

module.exports = new ProductOrderService()