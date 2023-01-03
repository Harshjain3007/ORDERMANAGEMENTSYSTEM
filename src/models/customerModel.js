const mongoose =require('mongoose')


const customerSchema = new mongoose.Schema({

firstName:{
    type:String,
    required:true,
    trim:true,
},
lastName:{
     type:String,
     required:true,
     trim:true,
},
Phone:{
     type:String,
     required:true,
     trim:true,
},
category: {
    type:String,
    default:'regular'
},
totalOrder:{
     type:Number,
     default:0
}
},{timeStamps:true}
)

module.exports = mongoose.model('customer',customerSchema)