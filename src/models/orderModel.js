const mongoose=require('mongoose')
const objectId=mongoose.Schema.Types.ObjectId
const orderSchema=new mongoose.Schema({
    userid:{
            type:objectId,
            ref:'newUser2',
           require:true},
	productid:{
           type:objectId,
           ref:'product',
           require:true},
	amount:Number,
	isFreeAppUser:{ type:Boolean,
               default:false,
              require:true}
               
            
    
},{timestamps:true})

module.exports=mongoose.model('order',orderSchema)