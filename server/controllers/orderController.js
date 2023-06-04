const OrderService = require('../services/orderService.js')
class OrderController{
    async create (req, res, next) {
        const {products, userName, userEmail, userPhone, userAddress, shopAddress, totalPrice} = req.body.datas
        console.log(req.body)
        const data = await OrderService.createOrder(products, userName, userEmail, userPhone, userAddress, shopAddress, totalPrice)
        res.json(data)
    }
    async getAllByEmail (req, res, next) {
        const {email} = req.body
        const response = await OrderService.getOrdersByEmail(email, next)
        res.json(response)
    }
    async getAllByPhone (req, res, next) {
        const {email} = req.body
        const response = await OrderService.getOrdersByEmail(email, next)
        res.json(response)
    }
}

module.exports = new OrderController()