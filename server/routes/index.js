const {Router} = require('express')

const router = new Router()
const userRouter = require('./userRouter')
const shopRouter = require('./shopRouter')
const productRouter = require('./productRouter')


// router.use('/user', userRouter)
router.use('/shop', shopRouter)
router.use('/product', productRouter)

module.exports = router