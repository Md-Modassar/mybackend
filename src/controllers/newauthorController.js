const newauthorModel=require('../models/newauthorModel')

const createnewauthor=async function(req,res){
    const data=req.body
    let {authorName}=data
    if(!authorName) return res.send("give authorName")
    const savedata=await newauthorModel.create(data)
    res.send({savedata})
}

module.exports.createnewauthor=createnewauthor