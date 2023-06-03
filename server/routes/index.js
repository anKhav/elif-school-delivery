const {Router} = require('express')

const router = new Router()
const shopRouter = require('./shopRouter')
const productRouter = require('./productRouter')
const orderRouter = require('./orderRouter')


router.use('/shop', shopRouter)
router.use('/product', productRouter)
router.use('/order', orderRouter)
router.use('/test', (req, res) => {
    res.json('Hello')
})

module.exports = router