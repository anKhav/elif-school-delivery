# Elif-school-delivery
On server used following tech:
- ExpressJS
- Sequelize
- PostgreSQL
- CORS
- Nodemon
On client used following tech:
- React
- Typescript
- Reduxtoolkit
- RTK Query
Products delivery app. For production used:
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

