const bookSchema= require("../models/bookModel")

const createUser= async function (req, res) {
    let data= req.body
    let allBooks= await bookSchema.create(data)
    res.send({msg: allBooks})
}

const getUsersData= async function (req, res) {
    let allBooks= await bookSchema.find()
    res.send({msg: allBooks})
}

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData