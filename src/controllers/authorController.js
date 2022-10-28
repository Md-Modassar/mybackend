const authorModel=require("../models/authorModel")
const newbookModel=require("../models/newbookModel")

const createarthorecode=async function(req,res){
    let data=req.body
    let savedData=await authorModel.create(data)
    res.send({msg:savedData})
}

const listbook=async function(req,res){
    let arthordetail=await authorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
  
    const a=arthordetail.map(x=>x)
     const arr=[]
     let i=0
     do{
        arr.push(a[i].author_id)
        i++
     }while(i<a.length)
   
    let bookdetail= await newbookModel.find({author_id:{$in:arr}})
    //res.send({bookdetail})
    res.send({bookdetail})
   
}

module.exports.createarthorecode=createarthorecode
module.exports.listbook=listbook