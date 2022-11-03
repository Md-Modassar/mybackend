const mongoose=require('mongoose')
const newUserschema=new mongoose.Schema({
    name: String,
	balance:Number, // Default balance at user registration is 100
	address:String,
	age: Number,
 	gender:{
        type:String,
        enum:["male","female"]
    }, 
 isFreeAppUser: Boolean
},{timestamps:true})

module.exports=mongoose.model('newUser2',newUserschema)
