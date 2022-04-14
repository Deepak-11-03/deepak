const express = require('express');
// const bookModel = require('../mongoDb/bookModel');
// const authorModel = require('../mongoDb/authorModel');
const allcontroller=require('../mongoDb/allcontroller')
const router = express.Router();
// const bookController= require("../controllers/bookController")

// router.post("/createBook", bookController.createBook )

// router.get("/bookList", bookController.book)

// router.get("/getBooksInYear", bookController.bookByYear)

// router.get("/getParticularBook", bookController.particularBook)

// router.get("/getXINRBooks", bookController.getXINRBooks)

// router.get("/getRandomBooks", bookController.getRandomBooks)

// router.get("/getRandomBooks", bookModel.getRandomBooks)

router.post("/createBooks", allcontroller.createBook )

router.post("/createAuthor", allcontroller.createAuthor )

router.get("/findBook", allcontroller.findBook )

router.get("/findAuthor", allcontroller.findAuthor )

router.get("/bookCosts", allcontroller.bookCosts )
module.exports = router;