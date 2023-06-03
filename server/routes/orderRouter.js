const {Router} = require('express')
const OrderController = require('../controllers/orderController')

const router = new Router()

router.post('/',OrderController.create)
router.get('/',OrderController.getAll)


module.exports = router