const mongoose = require('mongoose');
const moment=require('moment')
const users= new mongoose.Schema({
    name:String,
    balance:{
        type:Number,
        default:100
    },
    address:String,
    age:Number,
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    isFreeAppUser:{
        type:String,
        default:false
    },

},{timestamps:true})
module.exports=mongoose.model("user",users)