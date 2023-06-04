const OrderService = require('../services/orderService.js')
class OrderController{
    async create (req, res, next) {
        const {products, userName, userEmail, userPhone, userAddress, shopAddress, totalPrice} = req.body
        const data = await OrderService.createOrder(products, userName, userEmail, userPhone, userAddress, shopAddress, totalPrice)
        res.json(data)
    }
    async getAll (req, res, next) {
        const {email, phone} = req.body
        const response = await OrderService.getOrders(email, phone, next)
        res.json(response)
    }
}

module.exports = new OrderController()