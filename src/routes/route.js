const express = require('express');
const { route } = require('express/lib/application');
const allcontroller=require('../controllers/allcontroller')
const router = express.Router();


const middleware=function (req, res, next) {
    let headers= req.headers
    let freeApp=headers['isfreeappuser']
    if (!freeApp) {
      res.send("request is missing a mandatory header");
    }
  //  else if (freeApp=="true") {
  //     next();
  //   }
    else{
      next();
    }
}

router.post("/createProduct",allcontroller.createProduct)

router.post("/createUser",middleware,allcontroller.createUser)

router.post("/createOrder",middleware,allcontroller.createOrder)

module.exports = router;