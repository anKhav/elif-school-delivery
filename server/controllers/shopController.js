const ShopService = require('../services/shopService')


class ShopController{
    async create(req, res, next){
        const {name} = req.body
        const shop = await ShopService.create(name)
        res.json(shop)
    }
    async getAll(req, res, next){
        const shops = await ShopService.getAll()
        res.json(shops)
    }
    async get(req, res, next){
        const {id} = req.params
        const shop = await ShopService.get(id)
        res.json(shop)
    }
    async update(req, res, next){
        const {id} = req.params
        const {newName} = req.body
        const shop = ShopService.update(id, newName)
        res.json(shop)
    }
    async delete(req, res, next){
        const {id} = req.params
        const shop = ShopService.delete(id)
        res.json(shop)
    }
}

module.exports = new ShopController()