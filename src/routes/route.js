const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require('../middleware/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.midlware, userController.getUserData)

router.put("/updateUser/:userId",middleware.midlware, userController.updateUser)

router.delete("/deleteUser/:userId", middleware.midlware,userController.deleteUser)

module.exports = router;