const {Router} = require('express')
const ProductController = require('../controllers/productController.js')

const router = new Router()

router.post('/',ProductController.create)
router.get('/all',ProductController.getAll)
router.get('/:id',ProductController.get)
router.put('/:id',ProductController.update)
router.delete('/:id',ProductController.delete)

module.exports = router