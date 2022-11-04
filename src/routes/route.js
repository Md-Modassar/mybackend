const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const newUserController=require("../controllers/newUserController")
const tokenMw=require("../MiddelWare/tokenMW")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)


router.post("/createnewuser",newUserController.createnewUser)
router.post("/createlogin",newUserController.newLogin)


router.get("/newuser/:userId",newUserController.getnewUserdata)
router.put("/newuser/:userId",tokenMw.tokenmiddelware,newUserController.newUserUpdate)
router.delete("/deletuser/:userId",tokenMw.tokenmiddelware,newUserController.newUserdelete)


module.exports = router;
