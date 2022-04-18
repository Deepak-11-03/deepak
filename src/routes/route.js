const express = require('express');
const allcontroller=require('../controllers/allcontroller')
const router = express.Router();
router.post("/createAuthor", allcontroller.createAuthor )

router.post("/createPublisher", allcontroller.createPublisher )

router.post("/createBooks", allcontroller.createBook )

router.get("/fetchData", allcontroller.fetchData )

router.put("/updateBooks", allcontroller.updateBook )
module.exports = router;