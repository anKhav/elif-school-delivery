const {Router} = require('express')

const router = new Router()
const shopRouter = require('./shopRouter')
const productRouter = require('./productRouter')
const orderRouter = require('./orderRouter')


router.use('/shop', shopRouter)
router.use('/product', productRouter)
router.use('/order', orderRouter)

module.exports = router