const {model}=require("mongoose")
const orderModel=require('../models/orderModel')
const newUserModel=require('../models/newUserModel')
const producrModel=require('../models/producrModel')
const userModel = require("../models/userModel")

const createOrder=async function(req,res){
    const data=req.body
    //res.setheader(data.isFreeAppUser)
    /*const objectid=await newUserModel.findById(data.userid)
   
    if(objectid)
    {   
        const objectid1=await producrModel.findById(data.productid)
        if(!objectid1){ return res.send("check productid")}
        else{
    
        const savedata=await orderModel.create(data)
         res.send({savedata})
        }
    }
    else{
       res.send("that is check")
    }*/
    const objectid=await newUserModel.find().select({_id:1})
    //if(!objectid) return res.send("that is invalid authour_id")

   const ar=objectid.map(x=>x)
    let a=0
    const objetid1=await producrModel.find().select({_id:1})
    //if(!objetid1) return res.send("that is invalid")

    // const savedata=await newbooksModel.create(data)
    //   res.send({savedata})
   const arr=objetid1.map(x=>x)

   for(let i=0; i<ar.length; i++)
   {     if(data.userid==ar[i]._id)
       {
        for(let j=0; j<arr.length; j++)
        {
            if(data.productid==arr[j]._id)
          {
           const present=req.headers["isfreeappuser"]
              if(present=="false")
             {
                const userid=req.body["userid"]
                const ban=await newUserModel.findById(userid).select({balance:1,_id:0})
                const productid=req.body["productid"]
                const pri=await producrModel.findById(productid).select({price:1,_id:0})
                if(ban.balance<pri.price)
                {
                  console.log("that is insufficient balc")
                }
                if(ban.balance)
                {
                  const update=await newUserModel.findOneAndUpdate({$eq:{balance:pri.price}},{$set:{balance:+pri.price}})
                  console.log("it saved")
                }
                
                const savedata=await orderModel.create(data)
                res.send({savedata})
                a=1;
                
            }else{
              const savedata=await orderModel.create(data)
              console.log("that is true part")
              res.send({savedata}) 
              a=1
             }
          }else{
            res.send(" publisher_id enter valid _id")
          }

       }

     }
   }
    if(a==1)
    {
     console.log("sucessfull")
   }
   else{
       res.send("you check userid") 
    }
  

}

const orderwithuserandproduct=async function(req,res){
  const getdata=await orderModel.find().populate('userid').populate('productid')
  res.send({getdata})
}
module.exports.createOrder=createOrder
module.exports.orderwithuserandproduct=orderwithuserandproduct