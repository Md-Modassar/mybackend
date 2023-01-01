const jwt=require('jsonwebtoken')
const usermodel=require('../models/userModel')
const mongoose=require('mongoose')
const objectId=mongoose.Types.ObjectId

exports.authentication=async function(req,res,next){
    try{
        let token=req.headers.authorization
        if(!token){return res.status(400).send({status:false,msg:"Please set token "})}
        token=token.split(" ")
        jwt.verify(token[1],'this my own key',(err,decoded)=>{
            if(err){return res.status(401).send({status:false,msg:err.message})}
            req.id=decoded.userId
            next()
        })
    }catch(err){return res.status(500).send({status:false,msg:err.message})}
}

exports.authorization=async function(req,res,next){
    try{const userid=req.params.userId
    if(!objectId.isValid(userid)){return res.status(400).send({status:false,msg:"please enter velid userid"})}
    const userexist=await usermodel.findById(userid)
    if(!userexist){return res.status(404).send({status:false,msg:"userid is not existing"})}
   let id=req.id
    if(id!=userid){return res.status(403).send({status:false,msg:"unauthorized"})}
    next()
    }catch(err){return res.status(500).send({status:false,msg:err.message})}
}