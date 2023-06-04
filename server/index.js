require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')
const cookieParser = require('cookie-parser')

const router = require('./routes/index')

const app = express()


const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:'*'
}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});