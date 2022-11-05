const jwt=require('jsonwebtoken')
const newuserModel=require('../models/newuserModel')

const createnewuser=async function(req,res){
    const data=req.body
    const savedData=await newuserModel.create(data)
    res.send({data:savedData})
}

const newlogin=async function(req,res)
{
    const emailId=req.body.emailId
    const password=req.body.password

    const newuser=await newuserModel.findOne({emailId:emailId,password:password})
    if(!newuser) return res.send("email or password is not correct")

    let token=jwt.sign({
        userId:newuser._id,
        batch:"Lithium",
        organistion:"FunctionUp"
    },'functionup-lithium'
    
    );

    res.setHeader("x-auth-token",token)
    res.send({status:true,data:token})


}


const newgetuserdata=async function(req,res)
{
   
    let userid=req.params.userId
    const userdata=await newuserModel.findById(userid)
    if(!userdata)
      return res.send({status:true, msg:"not exists such as userid"})

      return res.send({status:true,data:userdata})


}

const newupdate=async function(req,res){
   
   
   const userid=req.params.userId
   /* const userdata=await newuserModel.findById(userid)
    if(!userdata)
      return res.send("that is not correct userid")*/

      const data=req.body
      const update=await newuserModel.findOneAndUpdate({_id:userid},data)
       res.send({status:true,msg:update})
    
}

const deletedata=async function(req,res){
   

       const userid=req.params.userId
      /* const userdata=await newuserModel.findById(userid)
       if(!userdata)
       return res.send("user id is not correct")*/

       const updatedelete=await newuserModel.findOneAndUpdate({_id:userid},{$set:{isDeleted:true}})
       res.send({status:true,data:updatedelete})
}


module.exports.createnewuser=createnewuser
module.exports.newlogin=newlogin
module.exports.newgetuserdata=newgetuserdata
module.exports.newupdate=newupdate
module.exports.deletedata=deletedata
