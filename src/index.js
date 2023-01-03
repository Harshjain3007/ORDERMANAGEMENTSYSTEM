const express= require('express') 
const mongoose = require('mongoose')

const route =require('./route/route')

const app = express()

app.use(express.json())

mongoose.set('strictQuery', true)

mongoose.connect(
    "mongodb+srv://HarshJain:harsh321@cluster0.dwkz9.mongodb.net/HarshJain-db",{useNewUrlParser:true}
)
.then(()=>console.log('MongoDb is connected'))
.catch((error=>console.log(error)))

app.use('/',route)

app.listen(process.env.PORT || 3000,function(){
    console.log('server is running on port'+(process.env.PORT || 3000))
})