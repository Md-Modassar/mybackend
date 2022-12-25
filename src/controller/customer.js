const customermodel=require('../models/customerModel') 
const jwt = require('jsonwebtoken')


function isValide(value) {
    return (typeof value === "string" && value.trim().length > 0 && value.match(/^[A-Za-z ][A-Za-z _]{1,100}$/));
}
function isValideMobile(value){
    return (typeof value === "string" &&  value.trim().length > 0 && value.match(/^[0-9]{10}$/))
  }
  function isValideMobile(value){
    return (typeof value === "string" &&  value.trim().length > 0 && value.match(/^[0-9]{10}$/))
  }
//===================================create customer===============================================//  
exports.createcustomer=async function(req,res){
    try{
        const data=req.body
       
    const {firstName,lastName,mobileNumber,address,customerId,status,emailId,DOB}=data
//------------------------------requied fields-----------------------------------------//
    if(!firstName){return res.status(400).send({status:false,msg:"Please enter firstname"})}
    if(!lastName){return res.status(400).send({status:false,msg:"Please enter lastname"})} 
    if(!mobileNumber){return res.status(400).send({status:false,msg:"Please enter mobileNumber"})}
    if(!emailId){return res.status(400).send({status:false,msg:"Please enter emailid"})}
    if(!DOB){return res.status(400).send({status:false,msg:"Please enter DOB"})}
    if(!address){return res.status(400).send({status:false,msg:"Please enter address"})}
    if(!status){return res.status(400).send({status:false,msg:"Please enter statuse"})}
    if(!customerId){return res.status(400).send({status:false,msg:"Please enter customerid"})}
//-------------------------------------validetion----------------------------------------------//    
   if(!isValide(firstName)){return res.status(400).send({status:false,msg:"Please enter propername"})}
   if(!isValide(lastName)){return res.status(400).send({status:false,msg:"Please enter lastname"})}
   if(!isValideMobile(mobileNumber)){return res.status(400).send({status:false,msg:"Please enter mobilenumber"})}
   if(!DOB.match(/((0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-[12]\d{3})/)){return res.status(400).send({status:false,msg:"please enter DOB 'dd-mm-yyyy'"})}
   if(!customerId.match(/[0-9]{4}-[0-9]{4}-[0-9]{3,10}/)){return res.status(400).send({status:false,msg:"Please enter customerid 'xxxx-xxxx-xxxx'"})}
   if(!emailId.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    return res.status(400).send({status:false,msg:"Please enter valide emailid"})
   }
   if(!isValideMobile(mobileNumber)){return res.status(400).send({status:false,msg:"please enter valide mobileNo."})}
//------------------------------check unique-------------------------------------------------------//
   const mobile=await customermodel.findOne({mobileNumber:mobileNumber})
   if(mobile){return res.status(400).send({status:false,msg:"Please enter another mobile-No."})}
   const email=await customermodel.findOne({emailId:emailId})
   if(email){return res.status(400).send({status:false,msg:"Please enter another emailId"})}
   const customerid=await customermodel.findOne({customerId:customerId})
   if(customerid){return res.status(400).send({status:false,msg:"Please enter another customerid"})}

   const savedata=await customermodel.create(data)
   return res.status(201).send({status:true,msg:":successfull",data:savedata})
    }catch(err){return res.status(500).send({status:false,msg:err.message})}
}


//========================== Login============================================================//
exports.logincustomer=async function(req,res){
    try{const email=req.body.emailId
    const mobile=req.body.mobileNo
   //---------------------------requied fields------------------------------------------------//
    if(!mobile){return res.status(400).send({status:false,msg:"Please enter mobileNumber"})}
    if(!email){return res.status(400).send({status:false,msg:"Please enter emailid"})}
  //----------------------------validetion--------------------------------------------------//
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        return res.status(400).send({status:false,msg:"Please enter valide emailid"})
       }
    if(!isValideMobile(mobile)){return res.status(400).send({status:false,msg:"please enter valide mobileNo."})}
//----------------------------DB call for validetion--------------------------------------//
   const mobilexist=await customermodel.findOne({mobileNumber:mobile})
   if(!mobilexist){return res.status(400).send({status:false,msg:"Please enter vaild mobile-No."})}
   const emailexis=await customermodel.findOne({emailId:email})
   if(!emailexis){return res.status(400).send({status:false,msg:"Please enter vaild emailId"})}
//------------------------------create token------------------------------------------------//
   const token= jwt.sign({
    customerId:mobilexist.customerId
   },"this token for one customer")

   return res.status(201).send({status:true,token:token})
}catch(err){return res.status(500).send({status:false,msg:err.message})}
}


//==========================Get Customers===========================================//
exports.getcustomer=async function(req,res){
    try{
    const getdata=await customermodel.find({isDeleted:false,status:'Active'})
    return res.status(200).send({status:true,msg:"all customer detail",data:getdata})
    }catch(err){return res.status(500).send({status:false,msg:err.message})}
}

//============================Delete Customer=================================================//
exports.deletecustomer=async function(req,res){
    try{
        const customerid=req.params.customerId

    const deletecu=await customermodel.findOneAndUpdate({customerId:customerid},{ $set:{isDeleted: true, deletedAt: new Date()}},{new:true})
    if(!deletecu){return res.status(404).send({status:false,msg:"customer is not found"})}
    {return res.status(200).send({status:true,msg:"customer delete is successfully"})}
    }catch(err){return res.status(500).send({status:false,msg:err.message})}
}