const mongoose = require('mongoose');
const user=require("../models/userModel")
const product=require("../models/productModel")
const ObjectId = mongoose.Schema.Types.ObjectId

const orders= new mongoose.Schema({
   userId:{
       type:ObjectId,
       ref: 'user',
   },
   productId:{
       type:ObjectId,
       ref: 'product',
   },
   amount:Number,
   isFreeAppUser:Boolean
},{timestamps:true})
module.exports=mongoose.model("Order",orders)