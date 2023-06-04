const {Router} = require('express')
const OrderController = require('../controllers/orderController')

const router = new Router()

router.post('/',OrderController.create)
router.post('/email',OrderController.getAllByEmail)
router.get('/phone',OrderController.getAllByPhone)


module.exports = router