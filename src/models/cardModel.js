const mongoose=require('mongoose')

const cardSchema=new mongoose.Schema({
 
cardType: {type:String,required:true,enum:['REGULAR','SPECIAL']},//[REGULAR/SPECIAL]
customerName: {type:String,required:true},
status:{type:String,default:'Active'},// [ACTIVE/INACTIVE] Default: ACTIVE
vision :String,
customerId:{type:String ,ref:'customer',required:true,unique:true},//Reference from customer
isDeletedAt:{type:Date,default:null},
isDeleted:{type:Boolean,default:false}
},{timestamps:true})

module.exports=mongoose.model('card',cardSchema)