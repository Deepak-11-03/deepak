const express = require('express');
const bookModel = require('../models/bookModel');
const router = express.Router();
const bookSchema= require("../models/bookModel")
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

router.post("/books", async function (req, res) {
    let  newBook=req.body
    let bookData=await bookSchema.create(newBook)
    res.send(bookData)
})
router.get("/books", async function (req ,res){
    let allBooks= await bookSchema.find()
    res.send(allBooks)
})
// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;