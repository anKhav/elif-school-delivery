const {Product, Order} = require('../db/models')
const ProductOrderService = require('./productOrderService')
const ProductService = require('./productService')
class OrderService {
    async createOrder (products, userName, userEmail, userPhone, userAddress, shopAddress, totalPrice) {
        const order = await Order.create({userName, userEmail, userPhone, userAddress, shopAddress, totalPrice})

        const productsOrder  = await Promise.all(products.map(async (product) => {
            const productModel = await ProductOrderService.createProductOrder(product.id, order.id, product.amount)
            return productModel.dataValues
        }));


        return {
            orderId: order.dataValues.id,
            userData: {
                userName: order.dataValues.userName,
                userEmail: order.dataValues.userEmail,
                userPhone: order.dataValues.userPhone,
                userAddress: order.dataValues.userAddress,
                shopAddress: order.dataValues.shopAddress,
            },
            totalPrice: order.dataValues.totalPrice,
            products: productsOrder
        }
    }

    async getOneOrder (orderId) {
        return await Order.findOne({where:{orderId}})
    }
    async getOrdersByEmail (email, next) {
        const ordersData = await Order.findAll({where: {userEmail:email}})

        if (!ordersData || ordersData.length === 0){
            next(new Error('Enter correct data'))
        }
        return await Promise.all(ordersData.map(async (order) => {
            const productOrder = await ProductOrderService.getProductOrder(order.dataValues.id)
            const products = await Promise.all(productOrder.map(async (product) => {
                return await ProductService.get(product.productId)
            }))
            return {...order.dataValues, products}
        }))
    }

    async getOrdersByPhone (phone, next) {
        const ordersData = await Order.findAll({where: {userEmail:phone}})

        if (!ordersData || ordersData.length === 0){
            next(new Error('Enter correct data'))
        }
        return await Promise.all(ordersData.map(async (order) => {
            const productOrder = await ProductOrderService.getProductOrder(order.dataValues.id)
            const products = await Promise.all(productOrder.map(async (product) => {
                return await ProductService.get(product.productId)
            }))
            return {...order.dataValues, products}
        }))
    }
}

module.exports = new OrderService()