const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
   Name:{type:String,required:true},
   PhoneNumber:{type:Number,required:true,unique:true},
   Age:{type:Number,required:true},
   Pincode:{type:Number,required:true},
   AadharNo:{type:String,required:true,unique:true},
   status :{type:String,default:"none"}


},{timestamps:true})

module.exports=mongoose.model('user',userschema)