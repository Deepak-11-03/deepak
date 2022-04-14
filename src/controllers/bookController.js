const bookSchema= require("../models/bookModel")

// -----------------------1-------------------------------
const createBook= async function (req, res) {
    let data= req.body
    let allBooks= await bookSchema.create(data)
    res.send({msg: allBooks})
}
// --------------------------2-------------------------------

const book= async function (req, res) {
    let bookList= await bookSchema.find().select({authorName:1, bookName:1 , _id : 0})
    res.send({msg: bookList})
}
// -------------------------3-------------------------
const bookByYear= async function (req, res) {
    let bodyData=req.body
    let bookByYear= await bookSchema.find({year:bodyData})
    res.send({msg: bookByYear})
}

// ------------------------4----------------------------
const particularBook= async function (req, res) {
    let condition=req.body
    let exactBook= await bookSchema.find(condition)
    res.send({msg:  exactBook})
}
// ----------------------5-------------------------

async function getXINRBooks(req, res) {
    let booksByInr = await bookSchema.find({"prices.indianPrice":{ $in: ["Rs100", "Rs200", "Rs500"]}})
    res.send({ msg: booksByInr })
}
//  ------------------6-----------------------------
        async function getRandomBooks(req, res) {
        let randomBooks = await bookSchema.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
        res.send({ msg: randomBooks })
    }

module.exports.createBook= createBook
module.exports.book= book
module.exports.bookByYear= bookByYear
module.exports.particularBook= particularBook
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks= getRandomBooks