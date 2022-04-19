const express = require('express');
const { route } = require('express/lib/application');
const allcontroller=require('../controllers/allcontroller')
const router = express.Router();


const middleware=function (req, res, next) {
    let x=  new Date(),
      y=req.ip,
      z=req.url
    console.log(x , y, z)
    next()
}

router.get("/gettime",middleware,allcontroller.dateTime)

router.get("/demo",middleware,allcontroller.demo)

module.exports = router;