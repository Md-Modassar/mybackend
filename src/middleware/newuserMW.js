const jwt=require('jsonwebtoken')
const newuserModel=require("../models/newuserModel")

const newauthenticate=function(req,res,next)
{
    const token=req.headers["x-auth-token"]
    if(!token)
      return res.send("header is something missing")

      const decodedToken=jwt.verify(token,'functionup-lithium')
      if(!decodedToken)
      return res.send({status:true,msg:"toke is not valide"})
      next()
}

const newauthorise=async function(req,res,next){
    const userid=req.params.userId
    const exists=await newuserModel.findById(userid)
    if(!exists)
    return res.send("that is not exists")
    if(userid=="63654bd66b71955f64d4e451")
    {
        next()
    }else{
    console.log("worng")
     return res.send("you don't have authorise")
    }
    


    

    
}

module.exports.newauthenticate=newauthenticate
module.exports.newauthorise=newauthorise
