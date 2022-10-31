const newauthorModel=require('../models/newauthorModel')

const createnewauthor=async function(req,res){
    const data=req.body

    const savedata=await newauthorModel.create(data)
    res.send({savedata})
}

module.exports.createnewauthor=createnewauthor