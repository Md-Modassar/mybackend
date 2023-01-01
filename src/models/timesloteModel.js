const mongoose=require('mongoose')
const objectId=mongoose.Schema.Types.ObjectId

const timeslotschema=new mongoose.Schema({

    slot:[{time:{type:String,default:"10.00.am"},
             userId:{type:objectId,ref:'user'},
            date:{type:Date,default:new Date()},
            status:String}],
    slotno:{type:Number,default:1} ,
          
    
    
},{timestamps:true})


 module.exports=mongoose.model('slot',timeslotschema)