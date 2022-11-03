const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:{
            type:String,
            uniqe:true,
            require:true
           },
    emailid:String,
    gender:{
        type:String,
        enum:['ma']
    }


})