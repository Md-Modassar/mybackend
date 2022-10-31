const { model } = require("mongoose")
const newauthorModel = require("../models/newauthorModel")
const newbooksModel=require("../models/newbookModel")
const newpublisherModel=require("../models/newpublisherModel")

const createnewbooks=async function(req,res){
    const data=req.body
   // const arr=data.map(x=>x)
   const b1=data.author_id
   data.publisher_id
    const ObjectId=await newauthorModel.find().select({_id:1})
    const ar=ObjectId.map(x=>x)
    let a=0
    const objetid1=await newpublisherModel.find().select({_id:1})
    const arr=objetid1.map(x=>x)

   for(let i=0; i<ar.length; i++)
   {
    if(data.author_id==ar[i]._id)
    {
        for(let j=0; j<arr.length; j++)
        {
            if(data.publisher_id==arr[j]._id)
          {
                const savedata=await newbooksModel.create(data)
                res.send({savedata})
                a=1;
            }

        }

    }
   }
   if(a==1)
   {
    console.log("sucessfull")
   }
   else{
      res.send("you check author_id, and publisher_id enter valid _id")
   }
  
}

const getbooksalongwith=async function(req,res){
    const getdata=await newbooksModel.find().populate('author_id').populate('publisher_id')
    res.send({getdata})
}

const updateprice=async function(req,res){
    const pr=await newbooksModel.find({ratings:2}).select({price:1,_id:0})
    const ara=pr.map(x=>x)
    let updare
    for(let i=0; i<ara.length; i++)
    {
        
     updare=await newbooksModel.findOneAndUpdate({$eq:{price:ara[i].price}},{$set:{price:ara[i].price+10}})
      
    }
    res.send({updare})
}
module.exports.createnewbooks=createnewbooks
module.exports.getbooksalongwith=getbooksalongwith
module.exports.updateprice=updateprice