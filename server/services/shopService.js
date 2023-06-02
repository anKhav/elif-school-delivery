const { Shop } = require('../db/models')
class ShopService {
   async create(name){
       return await Shop.create({name})
   }
    async getAll(){
        return await Shop.findAll()
    }
    async get(id){
        return await Shop.findOne({where:{id}})
    }
    async update(id, newName){
        const shop = await Shop.findOne({where:{id}})
        shop.name = newName
        await shop.save()

    }
    async delete(id){
        return await Shop.destroy({where:{id}})
    }
}

module.exports = new ShopService()