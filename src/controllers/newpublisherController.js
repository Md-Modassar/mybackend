const newPulisherModel=require("../models/newpublisherModel")

const createnewPublisher=async function(req,res){
    const data=req.body
    const savedata1=await newPulisherModel.create(data)
    res.send({savedata1})
}

const updatehardcopy=async function(req,res){
    const updata=await newPulisherModel.find({name:"Bloomsbury"}).findOneAndUpdate({$eq:{isHardCover:false}},
     {$set:{ isHardCover:true}},
     {new:true,upsert:false})
     res.send({updata})

}

module.exports.createnewPublisher=createnewPublisher
module.exports.updatehardcopy=updatehardcopy