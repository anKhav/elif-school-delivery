const {Product} = require('../db/models')
const uuid = require("uuid");
const path = require("path");

class ProductService{
    async create(name, image, price, shopId, next){
        const productConsist = await Product.findOne({where:{name}})
        if (productConsist){
            next(new Error('Product already consist'))
        }
        const fileName = uuid.v4() + ".jpg";
        await image.mv(path.resolve(__dirname, "..", "static", fileName));
        return Product.create({
            name,
            image: fileName,
            price,
            shopId
        })
    }
    async getAll(){
        return await Product.findAll()
    }
    async get(id){
        console.log('id'+id)
        return await Product.findOne({where:{id}})
    }
    async getByShop(shopId){
        return {
            shopId,
            products:await Product.findAll({where:{shopId}})
        }
    }
    async update(id, newName){
        const shop = await Product.findOne({where:{id}})
        shop.name = newName
        await shop.save()

    }
    async delete(id){
        return await Product.destroy({where:{id}})
    }
}

module.exports = new ProductService()