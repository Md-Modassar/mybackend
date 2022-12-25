const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    mobileNumber:{type:String,required:true,unique:true},//10 digits lon
    DOB:{type:Date,required:true},
    emailId:{type:String,required:true,unique:true},//abc@xyz.com
    address:{type:String,required:true},
    customerId:{type:String ,required:true,unique:true},//UUID
    status:{type:String,required:true},
    isDeletedAt:{type:Date,default:null},
    isDeleted:{type:Boolean,default:false}
},{timestamps:true})

module.exports=mongoose.model('customer',customerSchema)