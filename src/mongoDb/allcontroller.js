const authorModel= require("../mongoDb/authorModel")
const bookModel= require("../mongoDb/bookModel")

// -----------------------1-------------------------------
const createBook= async function (req, res) {
    let data= req.body
    let allBooks= await bookModel.create(data)
    res.send({msg: allBooks})
}
const createAuthor= async function (req, res) {
    let authors=req.body
    let allAuthors= await authorModel.create(authors)
    res.send({msg: allAuthors})
}

const findBook= async function (req, res) {
    let authors= await authorModel.find({authorName:"Chetan Bhagat"})
    let authorid=await authors[0].author_id
    let book=await bookModel.find({author_id : authorid}).select({name:1})
    res.send({msg: book})
}

const findAuthor= async function (req, res) {
    let author= await bookModel.find({name:"Two states"})
    let authorid=await author[0].author_id
       let updatedPrice= await bookModel.findOneAndUpdate({name:"Two states"},{price:100},{new:true})
    let bookauthor=await authorModel.find({author_id:authorid})
    res.send({msg: updatedPrice,bookauthor})
   
}

const bookCosts= async function (req, res) {
   const book=await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
  const authorid= book.map(x=>x.author_id)
  let arr=[]
  for(let i=0;i<authorid.length;i++){
      let j=authorid[i]
  const author=await authorModel.find({author_id: j}).select({authorName :1,_id:0})
  arr.push(author)

}
  const authorName=arr.flat()
    res.send(authorName)
 
}
module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.findBook= findBook
module.exports.findAuthor= findAuthor
module.exports.bookCosts= bookCosts