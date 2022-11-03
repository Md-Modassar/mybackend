const mongoose = require('mongoose');

const newpublisherschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
headQuarter:String,
isHardCover:{default:false}

},{timestamps:true})


module.exports=mongoose.model('publisher1',newpublisherschema)