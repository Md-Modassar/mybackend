const mongoose=require("mongoose") 
const newbookSchema =mongoose.Schema({
    bookName:{
            type:String,
             require:true
           },
    arthorName:String,
    price:{
            type:String,
            tage:["INR","URO"]
            
        },
    year:{type:String,default:"2022"},
    
    totalpages:Number,
    stockAvailable :Boolean

})
module.exports=mongoose.model("user1",newbookSchema)