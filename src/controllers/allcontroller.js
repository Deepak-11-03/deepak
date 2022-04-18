
const books= require("../models/newBook")
const publishers=require("../models/newPublisher")
const authors=require("../models/newAuthor")
// -----------------------1-------------------------------

const createAuthor= async function (req, res) {
    let data=req.body
    let allAuthors= await authors.create(data)
    res.send({msg: allAuthors})
}

// -------------------------2------------------------------
const createPublisher= async function (req, res) {
    let data=req.body
    let allPublisher= await publishers.create(data)
    res.send({msg: allPublisher})
}

// -----------------------------3-----------------------

const createBook= async function (req, res) {
    let book=req.body
    let authorId =book.author
    let publisherId=book.publisher
    if(!authorId){
        return res.send({msg:"author id is required"})
    }
    let author=await authors.findById(authorId)
    if(!author){
        return res.send({msg:"please enter valid author id"})
    }
    if(!publisherId){
        return res.send({msg:"publisher id is required"})
    }
    let publisher=await publishers.findById(publisherId)
    if (!publisher) {
        return res.send({msg:"please enter a valid publisher id"})
    }
    let bookCreate=await books.create(book)
    res.send(bookCreate)
}

// ----------------------4----------------------
const fetchData= async function (req, res) {
    let allData=await books.find().populate('author').populate('publisher')
    res.send({msg: allData})
   
}

// ----------------------5------------------------
const updateBook= async function (req, res) {

    let hardCover= await books.updateMany({publisher:{$in:["625a9891cde0c8c91b676bf5","625d3cf3a2be4cf3cd95d93f"]}},{$set:{isHardCover:true}},{new:true,upsert:true})
    let ratingBook= await books.find().updateMany({rating:{$gt:2}},{$inc:{price:10}})
   res.send({hardCover,ratingBook})
 
 }
module.exports.createBook= createBook
module.exports.createPublisher= createPublisher
module.exports.createAuthor= createAuthor
module.exports.fetchData= fetchData
module.exports.updateBook=updateBook