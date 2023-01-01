const usermodel=require('../models/userModel')
const timeslot=require('../models/timesloteModel');
const mongoose=require('mongoose')
const objectId=mongoose.Types.ObjectId
const jwt=require('jsonwebtoken');


function isValide(value) {
    return (typeof value === "string" && value.trim().length > 0 && value.match(/^[A-Za-z ][A-Za-z _]{1,100}$/));
  }
exports.createuser=async function(req,res){
    try{const data=req.body
  if(Object.keys(data).length==0){return res.status(400).send({status:false,msg:"Please enter data in body"})}
  const {Name,PhoneNumber,Age,Pincode,AadharNo,status}=data
  if(!Name){return res.status(400).send({status:false,msg:"Please enter Name"})}
  if(!PhoneNumber){return res.status(400).send({status:false,msg:"Please enter PhoneNumber"})}
  if(!Age){return res.status(400).send({status:false,msg:"Please enter Age"})}
  if(!Pincode){return res.status(400).send({status:false,msg:"Please enter Pincode"})}
  if(!AadharNo){return res.status(400).send({status:false,msg:"Please enter AadharNo"})}

  if(!isValide(Name)){return res.status(400).send({status:false,msg:"Please enter valid name"})}
  if(!PhoneNumber.match(/^[0-9]{10}$/)){return res.status(400).send({status:false,msg:"Please enter valid Phone number"})}
  if(!Age.match(/^[0-9]*$/)){return res.status(400).send({status:false,msg:"Please enter valid age"})}
  if(!Pincode.match(/^[0-9]{6}$/)){return res.status(400),send({status:false,msg:"Please enter valid Pincode"})}
  if(!AadharNo.match(/[0-9]{4}-[0-9]{4}-[0-9]{3,10}/)){return res.status(400).send({status:false,msg:"Please enter valid aadhar no XXXX-XXXX-XXX"})}
  if(status){
    
  }
  const aadharexit=await usermodel.findOne({AadharNo:AadharNo})
  if(aadharexit){return res.status(400).send({status:false,msg:"aadhar no is already existing"})}
  const Phoneexit=await usermodel.findOne({PhoneNumber:PhoneNumber})
  if(Phoneexit){return res.status(400).send({status:false,msg:"Phone no already exist"})}

   
  const savedata=await usermodel.create(data)
  for(let i=1; i<15; i++)
  {
    console.log("==="+savedata._id)
  const tsl=await timeslot.findOne({slotno:i})
    if(tsl.slot.length==10)
      {
        continue
      }
  
  
   {
    let f=0
    const arr=["10:00 am","10:30 am","11:00 am","11:30 am","12:00 pm","12:30 pm","1:00 pm",""]
  const obj={}
    obj.slot={
       time:arr[i-1],
      userId:savedata._id,
      date:new Date()
     }


  
  if(tsl.slot.length<10){
     f++
     const newbc=tsl.slot
     newbc.push(obj.slot)
    const saveuser=await timeslot.findOneAndUpdate({slotno:tsl.slotno},{$set:{slot:newbc}},{new:true})
    return res.status(200).send({status:true,msg:"booking succcessful",data:saveuser}) 
    
  }else{
        const arr=["10:00 am","10:30 am","11:00 am","11:30 am","12:00 pm","12:30 pm","1:00 pm",""]
          let i=1;
          obj.slot.time=arr[i],
          obj.slotno=i+1
      }

        console.log("-----"+obj)
        const saveuser=await timeslot.create(obj)
        req.id=savedata._id
      
        console.log("++++++"+req.id)
        return res.status(201).send({status:false,msg:"booking successfully",data:saveuser})
       }
    }
   }catch(err){return res.status(500).send({status:false,msg:err.message})}

}

exports.userlogin=async function(req,res){
 
 try{ const data=req.body
   const {PhoneNumber,Password}=data
   if(!PhoneNumber){return res.status(400).send({status:false,msg:"Please enter PhoneNumber"})}
   if(!Password){return res.status(400).send({status:false,msg:"Please enter password"})}
  const Phonenoexit=await usermodel.findOne({PhoneNumber:PhoneNumber})
  if(!Phonenoexit){return res.status(400).send({status:false,msg:"Phone is not exist in"})}
  
  const token=jwt.sign({
    userId:Phonenoexit._id
  },"this my own key",{expiresIn:'24hr'}) 
  
  return res.status(201).send({status:true,msg:"token successfully",token:token})
 }catch(err){return res.status(500).send({status:false,msg:err.message})}
}

exports.updateuser=async function(req,res){
 try{ const userId=req.params.userId
  const data=req.body

  const {Name,PhoneNumber,Age,Pincode,AadharNo}=data
 
    if(Name){
  if(!isValide(Name)){return res.status(400).send({status:false,msg:"Please enter valid name"})}
    }
    if(PhoneNumber){
  if(!PhoneNumber.match(/^[0-9]{10}$/)){return res.status(400).send({status:false,msg:"Please enter valid Phone number"})}
    }if(Age){
  if(!Age.match(/^[0-9]*$/)){return res.status(400).send({status:false,msg:"Please enter valid age"})}
    }
    if(Pincode){
  if(!Pincode.match(/^[0-9]{6}$/)){return res.status(400),send({status:false,msg:"Please enter valid Pincode"})}
    }if(AadharNo){
  if(!AadharNo.match(/[0-9]{4}-[0-9]{4}-[0-9]{3,10}/)){return res.status(400).send({status:false,msg:"Please enter valid aadhar no XXXX-XXXX-XXX"})}
    }

  const aadharexit=await usermodel.findOne({AadharNo:AadharNo})
  if(aadharexit){return res.status(400).send({status:false,msg:"aadhar no is already existing"})}
  const Phoneexit=await usermodel.findOne({PhoneNumber:PhoneNumber})
  if(Phoneexit){return res.status(400).send({status:false,msg:"Phone no already exist"})}

  const obj={
    Name:Name,
    PhoneNumber:PhoneNumber,
    Age:Age,
    Pincode:Pincode,
    AadharNo:AadharNo
  }
const userupdate=await usermodel.findByIdAndUpdate(userId,{$set:obj},{new:true})
return res.status(200).send({status:false,msg:"update successfully",data:userupdate})
 }catch(err){return res.status(500).send({status:false,msg:err.message})}

}

exports.getuser=async function(req,res){
 try{ const userid=req.params.userId
  
  if(!objectId.isValid(userid)){return res.status(400).send({status:false,msg:"Please enter valid userid"})}
  
  const userexit=await usermodel.findById(userid)
  if(!userexit){return res.status(404).send({status:false,msg:"userid is not exist"})}
  
   return res.status(200).send({status:true,data:userexit})

 }catch(err){return res.status(500).send({status:false,msg:err.message})}
}

exports.registerforsecondose=async function(req,res){
 try{ const data=req.body
  const {Name,PhoneNumber,Age,Pincode,AadharNo}=data
  const getdata=await usermodel.findOne({PhoneNumber:PhoneNumber})
  if(!getdata){return res.status(400).send({status:false,msg:"Please enter valide PhoneNumber"})}
  if(getdata.status=="none")
    {
      
      if(Object.keys(data).length==0){return res.status(400).send({status:false,msg:"Please enter data in body"})}
      
      if(!Name){return res.status(400).send({status:false,msg:"Please enter Name"})}
      if(!PhoneNumber){return res.status(400).send({status:false,msg:"Please enter PhoneNumber"})}
      if(!Age){return res.status(400).send({status:false,msg:"Please enter Age"})}
      if(!Pincode){return res.status(400).send({status:false,msg:"Please enter Pincode"})}
      if(!AadharNo){return res.status(400).send({status:false,msg:"Please enter AadharNo"})}
    
      if(!isValide(Name)){return res.status(400).send({status:false,msg:"Please enter valid name"})}
      if(!PhoneNumber.match(/^[0-9]{10}$/)){return res.status(400).send({status:false,msg:"Please enter valid Phone number"})}
      if(!Age.match(/^[0-9]*$/)){return res.status(400).send({status:false,msg:"Please enter valid age"})}
      if(!Pincode.match(/^[0-9]{6}$/)){return res.status(400),send({status:false,msg:"Please enter valid Pincode"})}
      if(!AadharNo.match(/[0-9]{4}-[0-9]{4}-[0-9]{3,10}/)){return res.status(400).send({status:false,msg:"Please enter valid aadhar no XXXX-XXXX-XXX"})}
      let status="Firs dose complite"
     
    
       
      const savedata=await usermodel.findOneAndUpdate({PhoneNumber:PhoneNumber},{$set:{status:status}},{new:true})
      for(let i=1; i<15; i++)
      {
        //console.log("==="+savedata._id)
      const tsl=await timeslot.findOne({slotno:i})
        if(tsl.slot.length==10)
          {
            continue
          }
      
      
       {
        let f=0
        const arr=["10:00 am","10:30 am","11:00 am","11:30 am","12:00 pm","12:30 pm","1:00 pm",""]
      const obj={}
        obj.slot={
           time:arr[i-1],
          userId:savedata._id,
          date:new Date()
         }
    
    
      
      if(tsl.slot.length<10){
         f++
         const newbc=tsl.slot
         newbc.push(obj.slot)
        const saveuser=await timeslot.findOneAndUpdate({slotno:tsl.slotno},{$set:{slot:newbc}},{new:true})
        return res.status(200).send({status:true,msg:"second does booking successfull",data:saveuser}) 
        
      }else{
            const arr=["10:00 am","10:30 am","11:00 am","11:30 am","12:00 pm","12:30 pm","1:00 pm",""]
              let i=1;
              obj.slot.time=arr[i],
              obj.slotno=i+1
          }
    
            console.log("-----"+obj)
            const saveuser=await timeslot.create(obj)
            req.id=savedata._id
          
            console.log("++++++"+req.id)
            return res.status(201).send({status:false,msg:"second dose booking successfull",data:saveuser})
           }
        } 
    }else{
      const update=await usermodel.findByIdAndUpdate({PhoneNumber:PhoneNumber},{$set:{status:"All complite"}})
      return res.status(200).send({status:true,msg:"All complite",data:update})
    }
  }catch(err){return res.status(500).send({status:false,msg:err.message})}
}