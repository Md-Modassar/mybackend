const cardmodel=require('../models/cardModel');
const customerModel = require('../models/customerModel');


function isValide(value) {
    return (typeof value === "string" && value.trim().length > 0 && value.match(/^[A-Za-z ][A-Za-z _]{1,100}$/));
}
//===========================Create Cards============================================//
exports.createcard=async function(req,res){
   try{
    const data=req.body
    
    const {cardType,customerName,customerId}=data
    //-----------------------------------requied fields---------------------------------------//
     if(!cardType){return res.status(400).send({status:false,msg:"please enter cardtype"})}
     if(!customerName){return res.status(400).send({status:false,msg:"please enter customer"})}
     if(!customerId){return res.status(400).send({status:false,msg:"please enter customerid"})}
     //---------------------------------validetion------------------------------------------------------//
     const arr=['REGULAR','SPECIAL']
     if(!arr.includes(cardType)){return res.status(400).send({status:false,msg:"Card type shoud be 'REGULAR','SPECIAL'"})}
     if(!isValide(customerName)){return res.status(400).send({status:false,msg:"please enter valid customer name"})}
     if(!customerId.match(/[0-9]{4}-[0-9]{4}-[0-9]{3,10}/)){return res.status(400).send({status:false,msg:"Please enter customerid 'xxxx-xxxx-xxxx'"})}
     //------------------------------DB call for validtion--------------------------------------//
     const customerid=await customerModel.findOne({customerId:customerId})
      if(!customerid){return res.status(404).send({status:false,msg:"customerid is not existing"})}
   //-------------------------------unique ------------------------------------------------//
     const customeridexist=await cardmodel.findOne({customerId:customerId})
     console.log(customeridexist)
     if(customeridexist){return res.status(400).send({status:false,msg:"Please enter another customerid"})}
     
     

      const savedata=await cardmodel.create(data)
      return res.status(201).send({status:true,msg:"card create successfull",data:savedata})
   }catch(err){return res.status(500).send({status:false,msg:err.message})}
    }

    //=========================Gets Cards==================================================//
    exports.getcards=async function(req,res){
       try{
        const customerid=req.params.customerId
   //---------------------------validetion & DB call-------------------------------------------------//
        if(!customerid.match(/[0-9]{4}-[0-9]{4}-[0-9]{3,10}/))
        {return res.status(400).send({status:false,msg:"Please enter customerid 'xxxx-xxxx-xxxx'"})}
        const customerexit=await customerModel.findOne({customerId:customerid,isDeleted:false})
        if(!customerexit){return res.status(404).send({status:false,msg:'customer is not existing'})}
       
        const getcards=await cardmodel.find({isDeleted:false})
        return res.status(200).send({status:true,data:getcards})
       }catch(err){return res.status(500).send({status:false,msg:err.message})}
    }
//================================delete card===========================//
    exports.deletedcards=async function(req,res){
      try{
         const cardid=req.params.cardId

         const carddelete=await cardmodel.findByIdAndUpdate({_id:cardid,isDeleted:false},{$set:{isDeleted:true,isDeletedAt:new Date()}})
         if(!carddelete){return res.status(404).send({status:false,msg:"card is not found"})}
         return res.status(200).send({status:false,msg:"card delete successfully"})

      }catch(err){return res.status(500).send({status:false,msg:err.message})}
    }
