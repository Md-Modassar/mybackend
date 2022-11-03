const producrModel = require('../models/producrModel')
const poductModel=require('../models/producrModel')

const createproduct=async function(req,res){
    const data=req.body
    const savedata=await producrModel.create(data)
    res.send({save:savedata})
}

module.exports.createproduct=createproduct