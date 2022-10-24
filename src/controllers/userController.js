const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")
const router = require("../routes/route")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const creatbook=async function(req,res){
    let recod=req.body
    let saverecod=await userModel.create(recod)
    res.send({recode:saverecod})
}
const getbookrecod= async function(req,res){
    let allrecode=await userModel.find()
    res.send({recod:allrecode})
}
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.creatbook=creatbook
module.exports.mybookrecod=getbookrecod