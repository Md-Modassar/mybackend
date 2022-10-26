const {count} =require("console")
const newbookmodel=require('../models/newbookmodel')

const newcreatebook=async function(req,res){

        let data=req.body
        let savedData=await newbookmodel.create(data)
        res.send({msg:savedData})
}
const getnewbook=async function(req,res){
    let savedData=await newbookmodel.find().select({bookName:1,arthorName:1,_id:0})
    res.send({msg:savedData})
}
const getyear=async function(req,res){
    let yeardata=req.body.year1
    let yearlist=await newbookmodel.find({year:yeardata})
    res.send({year:yearlist})
}
const getpaticularbook=async function(req,res){
    let input=req.body.data1
    let alldata=await newbookmodel.find({ $or:[{bookName:input},{year:input},{arthorName:input}] })
    res.send({alldata:alldata})
}

const getinrbook=async function(req,res){
    let input=req.body.data
    let inrbooks=await newbookmodel.find({price:input})
    res.send({books:inrbooks})
}

const getrandom=async function(req,res){
    let booksstack=await newbookmodel.find({totalpages:{$gt:500}})
    res.send({books:booksstack})
}

module.exports.newcreatebook=newcreatebook
module.exports.getnewbook=getnewbook
module.exports.getyear=getyear
module.exports.getpaticularbook=getpaticularbook
module.exports.getinrbook=getinrbook
module.exports.getrandom=getrandom