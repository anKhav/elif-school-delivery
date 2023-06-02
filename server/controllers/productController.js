const ProductService = require('../services/productService')


class ProductController{
    async create(req, res, next){
        const {name, price, shopId} = req.body
        const {image} = req.files
        const product = await ProductService.create(name, image, price, shopId, next)
        res.json(product)
    }
    async getAll(req, res, next){
        const product = await ProductService.getAll()
        res.json(product)
    }
    async get(req, res, next){
        const {id} = req.params
        const product = await ProductService.get(id)
        res.json(product)
    }
    async update(req, res, next){
        const {id} = req.params
        const {newName} = req.body
        const product = await ProductService.update(id, newName)
        res.json(product)
    }
    async delete(req, res, next){
        const {id} = req.params
        const product = await ProductService.delete(id)
        res.json(product)
    }
}

module.exports = new ProductController()