const express = require('express');
const allcontroller=require('../controllers/allcontroller')
const router = express.Router();
router.post("/createBatch", allcontroller.createBatch )

router.post("/createDeveloper", allcontroller.createDeveloper )

router.get("/scholarship-developers", allcontroller.scholarshipDev )

router.get("/developers", allcontroller.developers )

module.exports = router;