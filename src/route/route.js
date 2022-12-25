const express=require('express')


const router=express.Router()
const { createcustomer, getcustomer, deletecustomer, logincustomer }=require('../controller/customer')
const { authentication, authrization }=require('../middelware/orth')
const { createcard, getcards, deletedcards }=require('../controller/card')

router.post("/customers",createcustomer) 
router.post('/login',logincustomer)
router.get("/customers",authentication,getcustomer)
router.delete("/customer/:customerId",authentication,authrization,deletecustomer)


router.post("/cards",createcard)
router.get("/cards/:customerId",authentication,getcards)
router.delete("/cards/:cardId",authentication,authrization,deletedcards)
module.exports=router