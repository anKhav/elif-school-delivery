const {Router} = require('express')
const ShopController = require('../controllers/shopController')

const router = new Router()

router.post('/',ShopController.create)
router.get('/',ShopController.getAll)
router.get('/:id',ShopController.get)
router.put('/:id',ShopController.update)
router.delete('/:id',ShopController.delete)

module.exports = router