const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const newuserController=require("../controllers/newuserController")
const newauthenticateMW=require("../middleware/newuserMW")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", userController.updateUser)
//router.delete('/users/:userId', userController.deleteUser)


router.post("/createnewuser",newuserController.createnewuser)
router.post("/newlogin",newuserController.newlogin)
router.get("/newgetuser/:userId",newauthenticateMW.newauthenticate,newauthenticateMW.newauthorise,newuserController.newgetuserdata)
router.put("/newupdate/:userId",newauthenticateMW.newauthenticate,newauthenticateMW.newauthorise,newuserController.newupdate)
router.delete("/newdelete/:userId",newauthenticateMW.newauthenticate,newauthenticateMW.newauthorise,newuserController.deletedata)
module.exports = router;

