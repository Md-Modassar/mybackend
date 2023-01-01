const express=require('express')
const router=express.Router()
const { createuser, userlogin, updateuser, getuser, registerforsecondose }=require('../controller/usercantoller')
const { createAdmin, getusers }=require('../controller/Admicantroller')
const { authentication, authorization }=require('../middelware/auth')


router.post("/registers",createuser)
router.post("/login",userlogin)
router.put("/user/:userId",authentication,authorization,updateuser)
router.get("/user/:userId",authentication,getuser)
router.put("/secodedose",registerforsecondose)

router.post("/admin",createAdmin)
router.get("/users",getusers)

module.exports=router