const jwt=require('jsonwebtoken')
const newuserModel=require("../models/newuserModel")

const newauthenticate=function(req,res,next)
{
    try{
    const token=req.headers["x-auth-token"]
    if(!token)
      return res.status(404).send("header is something missing")

      const decodedToken=jwt.verify(token,'functionup-lithium')
      if(!decodedToken)
       return res.status(401).send({status:true,msg:"toke is not valide"})

     // req.userId=decodedToken.userId
      next()
    }catch(error){
        res.status(500).send({msg:error})

    }
}

const newauthorise=async function(req,res,next){
   try{ const userid=req.params.userId
    //const toke=req.headers["x-auth-token"]
    const exists=await newuserModel.findById(userid)
    if(!exists)
    return res.status(400).send("that is not exists")
    if(userid=="63654bd66b71955f64d4e451")
    {
        next()
    }else{
    
     return res.status(405).send("you don't have authorise")
    }
}catch(error){
    res.status(500).send({msg:error})
}
    


    

    
}

module.exports.newauthenticate=newauthenticate
module.exports.newauthorise=newauthorise
