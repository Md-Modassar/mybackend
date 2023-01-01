const adminmodel=require('../models/Admin')
const usermodel=require('../models/userModel')

const isValidEmail = function (value) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    if (emailRegex.test(value)) return true;
  };
function isValide(value) {
    return (typeof value === "string" && value.trim().length > 0 && value.match(/^[A-Za-z ][A-Za-z _]{1,100}$/));
  }
exports.createAdmin=async function(req,res){
    try{const data=req.body
    const {Name,email,password}=data

    if(!Name){return res.status(400).send({status:false,msg:"Please enter Name"})}
    if(!email){return res.status(400).send({status:false,msg:"Please enter email"})}
    if(!password){return res.status(400).send({status:false,msg:"Please enter password"})}

    if(!isValide(Name)){return res.status(400).send({status:false,msg:"please enter valid name"})}
    if(!isValidEmail(email)){return res.status(400).send({status:false,msg:"please enter valid email"})}
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,15}$/))
     {return res.status(400).send({status:false,msg:"Please enter valid password"})}

     const emailexit=await adminmodel.findOne({email:email})
     if(emailexit){return res.status(400).send({status:false,msg:"eamil already exist"})}

     const savedata=await adminmodel.create(data)
     return res.status(201).send({status:true,msg:"admin create successfully",data:savedata})
    }catch(err){return res.status(500).send({status:false,msg:err.message})}
}

exports.getusers=async function(req,res){
   try{ const data=req.query
    const {Age,Pincode,status}=data
    if(Age){
      if(!Age.match(/^[0-9]*$/)){return res.status(400).send({status:false,msg:"Please enter valid age"})}
    }
    if(Pincode){
        if(!Pincode.match(/^[0-9]{6}$/)){return res.status(400),send({status:false,msg:"Please enter valid Pincode"})}
    }
    if(status){
        const arr=["none","First dose completed","All completed"]
        if(!arr.includes(status)){return res.status(400).send({status:false,msg:"Please enter valid string 'none/First dose completed/All completed'"})}
    }

    const getuser=await usermodel.find(data)
    return res.status(200).send({status:true,users:getuser})
}catch(err){return res.status(500).send({status:false,msg:err.message})}
}