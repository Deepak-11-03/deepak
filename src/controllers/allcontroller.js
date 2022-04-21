const product=require("../models/productModel")
const user=require("../models/userModel")
const order=require("../models/orderModel")  

const createProduct=async function(req,res){
   let data=req.body
   let products=await product.create(data)
   res.send(products)
}
const createUser=async function(req,res){
    let data=req.body
    let users=await user.create(data)
    res.send(users)
 }

 const createOrder=async function(req,res){
    let data=req.body
    let userid=data.userId
    let productid=data.productId
    let headers=req.headers
    let appType=headers["isFreeAppUser"]
    if (!appType) {
        appType=headers["isfreeappuser"]
    }
    if (!appType) {
        return res.send({status:false,msg:"header is mandatory"})
    }

    let usersId=await user.findById(userid)
    let productId=await product.findById(productid)
    if (!usersId) {
        return res.send({msg:"please enter valid user id"})
    }
    if (!productId) {
        return res.send({msg:"please enter valid product id"})
    }
    let appTypeFree=false
    if (appType == 'true') {
        appTypeFree=true
    }
    if(!appTypeFree && user.balance >= product.price){
        user.balance = user.balance-product.price
        await user.save()
        data.amount=product.price
        data.isFreeAppUser= false
        let order=await order.create(data)
        return res.send({status:true, data:order})
    }
    else if (!appTypeFree) {
        return res.send({status:false,message:"user not have sufficient balance"})
    }
    else{
        data.amount=0
        data.isFreeAppUser=true
        let orderdetail=await order.create(data)
        res.send({status:true,data:orderdetail})
    }
 }
module.exports.createProduct=createProduct

module.exports.createUser=createUser

module.exports.createOrder=createOrder




  // if (header===false) {
    // await user.find({_id:userid}).update({balance:(balance-price)},{new:true})
    // }