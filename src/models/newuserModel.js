const mongoose=require("mongoose")

const newUserSchema=new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobile : String,
    emailId : String,
    password : String,
    gender : {tyoe:String,
            enum:['male','female','other']
              },
	isDeleted:{type:Boolean,
               default:false}, //default value is false 
    age :Number
},{timestamps:true})

module.exports=mongoose.model('newUser3',newUserSchema)