const mongoose=require('mongoose')

const newuserSchema=new mongoose.Schema({
 
    firstName: String,
    lastName :{type:String,require:true},
    mobile : String,
    emailId : String,
    password: String,
    gender : {
            type:String,
            enum:["male","female","other"]
             },
	isDeleted:{
        type:Boolean, default:false
    },
    age:Number,      
},{timestamps:true})


module.exports=mongoose.model("newuser4",newuserSchema)
