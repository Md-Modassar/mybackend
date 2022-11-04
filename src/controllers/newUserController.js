const jwt=require("jsonwebtoken")
const newuserModel=require("../models/newuserModel")
const { updateUser } = require("./userController")

const createnewUser=async function(req,res){
    const data=req.body
    const savedData=await newuserModel.create(data)
    res.send({savedData})
}

const newLogin=async function(req,res){
    let email=req.body.emailId
    let password=req.body.password
    const match=await newuserModel.findOne({emailId:email,password:password})
    if(!match)return res.send({msg:"emailId and password is not correct"})
    
      let token= jwt.sign({
        userId:match._id.toString(),
        batch:"Lithium",
        organisation:"FunctionUp"
      },"functionUp-Lithum-very-very-secret-key")
      res.setHeader("x-lithium-token",token);
      res.send({statuse:true, token:token})
    }

    const getnewUserdata=async function(req,res){
        let token=req.headers["x-Lithium-token"]
        if(!token) token=req.headers["x-lithium-token"]

        if(!token)return res.send({status:false,msg:"token must be present"})
        console.log(token);

        let decodedToken= jwt.verify(token, "functionUp-Lithum-very-very-secret-key");
        if(!decodedToken)
          return res.send({status:false, msg:"token is invalide"})

          let userid=req.params.userId
          let userdetails=await newuserModel.findById(userid)
          if(!userdetails) return res.send({status:false,msg:"No such as user exists"})

        res.send({status:true, data:userdetails}) 







        
    }


    const newUserUpdate=async function(req,res){
        let userid=req.params.userId
        let newuser=await newuserModel.findById(userid)
        if(!newuser){return res.send("No such as user")}
        let userdata=req.body
        let updatedata=await newuserModel.findOneAndUpdate({_id:userid},userdata)
        res.send({status:updatedata,data:updatedata})


    }

    const newUserdelete=async function(req,res){
      let userid=req.params.userId
      let newuser=await newuserModel.findById(userid)
      if(!newuser){return res.send("No such as user")}
      let userdata=req.body
      let deletedata=await newuserModel.findOneAndUpdate({_id:userid},userdata)
      res.send({status:deletedata,data:deletedata})


  }
    


module.exports.createnewUser=createnewUser
module.exports.newLogin=newLogin
module.exports.getnewUserdata=getnewUserdata
module.exports.newUserUpdate=newUserUpdate
module.exports.newUserdelete=newUserdelete
