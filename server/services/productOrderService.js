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
        const products  = await Promise.all(productOrders.map(async (product) => {
            console.log(product);
            const productData = await ProductService.get(product.dataValues.productId)
            const data = {...productData}
            const dataValue = data.dataValues
            // console.log(dataValue)
            const result = {
                id:dataValue.id,
                name:dataValue.name,
                image:dataValue.image,
                price:dataValue.price,
                amount:product.dataValues.amount,
                shopId:productData.shopId,
                createdAt:dataValue.createdAt,
                updatedAt:dataValue.updatedAt,
            }
            return result
        }));
        return products
    }

}

module.exports = new ProductOrderService()