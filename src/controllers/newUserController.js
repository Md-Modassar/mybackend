const { model } = require('mongoose')
const newUserModel=require('../models/newUserModel')

const createnewUser=async function(req,res){
    const data=req.body
    const savedata=await newUserModel.create(data)
    res.send({savedata:savedata})

}

module.exports.createnewUser=createnewUser