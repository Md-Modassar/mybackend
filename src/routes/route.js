const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.get("/test-sol1",function(req,res){
    const arr=[1,2,3,5,6,7]
    const n=7
    const sumofno=(n*(n+1))/2
    let sumofarr=0
   for(let i=0; i<arr.length; i++)
    {
        sumofarr +=arr[i]
    }
    let missingno=sumofno-sumofarr
    res.send("missingno="+missingno)
})
router.get("/test-sol2",function(req,res){
    const arr=[33,34,35,37,38]
    const n=6
    const sumofno=(n*(33+38))/2
    let sumofarr=0
    for(let i=0; i<arr.length; i++)
    {
        sumofarr +=arr[i]
    }
    const missingno=sumofno-sumofarr
    res.send("missingno=" +missingno)
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6,7])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

const array=[
    {
     "name":"manish",
     "dob":"1/1/1995",
     "gender":"male",
     "city":"jalandha",
     "sports":["swimming"]
},
{
    "name":"lokesh",
    "dob":"1/1/1999",
    "gender":"male",
    "city":"mubai",
    "sports":[
        "soccer"
    ]
}
]
router.post("/player",function(req,res){
    let newplayer=req.body.playerinfo
    array.push(newplayer)
    res.send(array)
})

module.exports = router;