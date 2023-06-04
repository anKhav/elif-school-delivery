const {Product, Order} = require('../db/models')
const ProductOrderService = require('./productOrderService')
class OrderService {
    async createOrder (products, userName, userEmail, userPhone, userAddress, shopAddress, totalPrice) {
        const order = await Order.create({userName, userEmail, userPhone, userAddress, shopAddress, totalPrice})

        const productOrder  = await Promise.all(products.map(async (product) => {
            return await ProductOrderService.createProductOrder(product.id, order.id, product.amount)
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
    async getOrders (email, phone, next) {
        const getOrdersByEmail = async () => {
            if (email !== ''){
                return  await Order.findAll({where: {userEmail:email}})
            }
        }
        const getOrdersByPhone = async () => {
            if (phone !== '') {
                return await Order.findAll({where: {userPhone: phone}})
            }
        }
        const getOrders = async () => {
                const responseByEmail = await getOrdersByEmail()
                const responseByPhone = await getOrdersByPhone()
            if (responseByEmail.length === 0){
                return await getOrdersByPhone()
            } else if (responseByPhone.length === 0) {
                return await getOrdersByEmail()
            }
        }
        const ordersData = await getOrders()
        if (ordersData.length === 0){
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