# Elif-school-delivery
#### On server used following tech:
- ExpressJS
- Sequelize
- PostgreSQL
- CORS
- Nodemon
#### On client used following tech:
- React
- Typescript
- Reduxtoolkit
- RTK Query
## Products delivery app. 
#### For production used:
- PostgreQSL database: https://railway.app/ 
- ExpressJS server: https://railway.app/ 
- React client via Vite: https://vercel.com/ 
## Get started to run local repo
### What needs to be installed
- Node 18.x.x +
- PostgreSQL 14.xx.x +

#### Next steps
- Copy repo by instruction https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop.
- Open project locally.
- Go to terminal:
   - ```cd server```
   - ```npm i```
   - ```cd ../client```
   - ```npm i```.

#### Create database(you need to write you correct database username and password in server/db/config/config.js in development object) by
- ```cd server/db```
- ```sequelize-cli db:create```
#### Note:default enviroment is development
#### Migrate tables by:
   - ```sequelize-cli db:migrate```
#### Seed data by:
   - ```sequelize-cli db:seed:all```
#### Start server locally by
- Go to server root directory
- Run command ```npm run dev```
#### Start client locally by
- Go to client root directory
- Run command ```npm run dev```


## Commands to manage database from terminal from ./server/db directory:
##### Note:all information about database connection is in ./server/db/config/config.js
- ```sequelize-cli db:create``` -create database
- ```sequelize-cli db:migrate``` -migrate database tables
- ```sequelize-cli db:migrate:undo:all``` -revert all database tables
- ```sequelize-cli db:seed``` -seed data
- ```sequelize-cli db:seed:undo:all``` -revert all seed
#### Note:can manage different databases by commands and their configuration in ./server/db/config/config.js and use in choosen enviroment by adding attribute ```--env:NODE_ENV```. For example in production env ```--env:production```
# Warning: cartProduct amoun input can work uncorrect.
## API endpoints from root url (for example: https://example.com/):
- api/shop
  - method ```POST``` body ```{name:string}``` create shop
    - response ```{id:number,name:string,ctreatedAt:date,updatedAt:date}```
  - method ```GET```get all shop 
    - response ```[{id:number,name:string,ctreatedAt:date,updatedAt:date},{id:number,name:string,ctreatedAt:date,updatedAt:date}...]```
- api/shop/:id
  - method ```GET`` get shop by id
    - response ```{id:number,name:string,ctreatedAt:date,updatedAt:date}```
  - method ```DELETE`` delete shop by id
- api/product
  - method ```POST``` body ```{name:string, image:file, price:number, shopId:number}``` create product
    - response ```{id:number,name:string, image:file, price:number, shopId:number,ctreatedAt:date,updatedAt:date}``` 
- api/product/all
  - method ```GET```get all product 
    - response ```[{id:number,name:string, image:file, price:number, shopId:number,ctreatedAt:date,updatedAt:date},{id:number,name:string, image:file, price:number, shopId:number,ctreatedAt:date,updatedAt:date}...]```
- api/product/:id
  - method ```GET`` get product by id
    - response ```{id:number,name:string, image:file, price:number, shopId:number,ctreatedAt:date,updatedAt:date}```
  - method ```DELETE`` delete delete by id
 - api/product/all/:shop
  - method ```GET```get all product by shopId
    - response ```[{id:number,name:string, image:file, price:number, shopId:number,ctreatedAt:date,updatedAt:date},{id:number,name:string, image:file, price:number, shopId:number,ctreatedAt:date,updatedAt:date}...]```
 - api/order
   - method ```POST``` body ```{
          "products":[
              {
                  "id": 2,
              "name": "ChickenBurger",
              "image": "f708739e-52a2-4974-b554-3a8e6caeddb6.jpg",
              "price": 3,
              "shopId": 2
              },
              {
              "id": 4,
              "name": "Cola",
              "image": "ef76c230-5778-48d3-b31a-5e9955a3f8e0.jpg",
              "price": 5,
              "shopId": 2
              }
          ],
          "userName": "Nick",
          "userEmail":"gmail@mail.com",
          "userPhone": "+38066456789671",
          "userAddress":"Kyiv 1",
          "shopAddress":"Kyiv 2"
      }``` - create order
  - api/order/email
    - - method ```POST``` body ```email:string```
      - response - list of orders 
  - api/order/phone
    - - method ```POST``` body ```phone:string```
      - response - list of orders 

