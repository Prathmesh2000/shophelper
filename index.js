const express = require("express")
const app = express()
require('dotenv/config')

require('./database/connection')
.authenticate()
.then( ()=> console.log('Connected'))
.catch( ()=> console.log('not Connected'))

app.listen(3000, ()=>{
    console.log('app is running on port 3000')
})