const jwt=require('jsonwebtoken')
const newuserModel=require('../models/newuserModel')

const createnewuser=async function(req,res){
    const data=req.body
    const savedData=await newuserModel.create(data)
    res.status(201).send({data:savedData})
}

const newlogin=async function(req,res)
{
    const emailId=req.body.emailId
    const password=req.body.password

    const newuser=await newuserModel.findOne({emailId:emailId,password:password})
    if(!newuser) return res.status(400).send("email or password is not correct")

    let token=jwt.sign({
        userId:newuser._id,
        batch:"Lithium",
        organistion:"FunctionUp"
    },'functionup-lithium'
    
    );

    res.setHeader("x-auth-token",token)
    res.status(200).send({status:true,data:token})


}


const newgetuserdata=async function(req,res)
{
   
   try{ let userid=req.params.userId

   // const decode=req.userId
   // console.log(decode)

    const userdata=await newuserModel.findById(userid)
      if(!userdata)
      return res.status(404).send({status:true, msg:"not exists such as userid"})

      return res.status(200).send({status:true,data:userdata})
   }
   catch(error){
     res.status(500).send({status:false,msg:error})
   }


}

const newupdate=async function(req,res){
   
   
   try{const userid=req.params.userId
   /* const userdata=await newuserModel.findById(userid)
    if(!userdata)
      return res.send("that is not correct userid")*/

      const data=req.body
      const update=await newuserModel.findOneAndUpdate({_id:userid},data)
      console.log("ok")
     res.status(200).send({status:true,msg:update})
   }catch(error){
    res.status(500).send({msg:error})
   }
    
}

const deletedata=async function(req,res){
   

       try{
        const userid=req.params.userId

      /* const decode=req.userId
       console.log(decode)*/

      /* const userdata=await newuserModel.findById(userid)
       if(!userdata)
       return res.send("user id is not correct")*/

       const updatedelete=await newuserModel.findOneAndUpdate({_id:userid},{$set:{isDeleted:true}})
       res.status(200).send({status:true,data:updatedelete})
       }catch(error){
        res.status(500).send({status:false,msg:error})
       }
}


module.exports.createnewuser=createnewuser
module.exports.newlogin=newlogin
module.exports.newgetuserdata=newgetuserdata
module.exports.newupdate=newupdate
module.exports.deletedata=deletedata
