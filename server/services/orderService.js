const {Product, Order} = require('../db/models')
const ProductOrderService = require('./productOrderService')
class OrderService {
    async createOrder (products, userName, userEmail, userPhone, userAddress, shopAddress, totalPrice) {
        const order = await Order.create({userName, userEmail, userPhone, userAddress, shopAddress, totalPrice})

        const productOrder  = await Promise.all(products.map(async (product) => {
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
            products: productOrder
        }
    }

    async getOneOrder (orderId) {
        return await Order.findOne({where:{orderId}})
    }
    async getOrdersByEmail (email) {
        const ordersData = await Order.findAll({where: {userEmail:email}})
        console.log('ordersData '+ordersData)
        if (!ordersData || ordersData.length === 0){
            return {error:'Please enter valid data.'}
        }

        return await Promise.all(ordersData.map(async (order) => {
                return {
                        orders:{
                            ...order.dataValues,
                            products: await ProductOrderService.getProductOrder(order.id)
                        }
                }
            }))
    }
    async getOrdersByPhone(phone) {
        const ordersData = await Order.findAll({where: {userPhone:phone}})
        if (!ordersData || ordersData.length === 0){
            return {error:'Please enter valid data.'}
        }

        return await Promise.all(ordersData.map(async (order) => {
            return {
                orders:{
                    ...order.dataValues,
                    products: await ProductOrderService.getProductOrder(order.id)
                }
            }
        }))
    }
}

module.exports = new OrderService()