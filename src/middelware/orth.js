const jwt=require('jsonwebtoken')
const { head } = require('../route/route')
const customermodel=require('../models/customerModel')
const cardmodel=require('../models/cardModel')
const mongoose=require('mongoose')
const objectId=mongoose.Types.ObjectId


exports.authentication=async function(req,res,next){
    try{const token=req.headers['cu-to-key']
    if(!token){return res.status(400).send({status:false,msg:'Please set header'})}
    jwt.verify(token, "this token for one customer", (err, decoeded) => {
        if (err) return res.status(401).send({ status: false, message: err.message })
          req.customerid = decoeded.customerId
           next() 
   }
   )
}catch(err){return res.status(500).send({status:false,msg:err.message})}
}



exports.authrization=async function(req,res,next){
    try{const customerid=req.params.customerId
        const cardid=req.params.cardId
        const id=req.customerid
      if(customerid){  
    if(!customerid.match(/[0-9]{4}-[0-9]{4}-[0-9]{3,10}/)){return res.status(400).send({status:false,msg:"Please enter customerid 'xxxx-xxxx-xxxx'"})}
    
    const customeridexist=await customermodel.findOne({customerId:customerid,isDeleted:false})
   if(!customeridexist){return res.status(404).send({status:false,msg:"Please enter valide customerid"})}

    
    if(id===customerid){
        next()}else{return res.status(403).send({statuse:false,msg:"unathraization"})}
    }else{
        if(!objectId.isValid(cardid)){return res.status(400).send({status:false,msg:"Please give valid cardid"})}
        const cardexist=await cardmodel.findById({_id:cardid,isDeleted:false})
        if(!cardexist){return res.status(400).send({status:false,msg:"card is not exist"})}
        
        let custid=cardexist.customerId
        if(id===custid)
        {
            next()
        }else{return res.status(403).send({status:false,msg:"unauthorize"})}
    }
}catch(err){return res.status(500).send({status:false,msg:err.message})}
}