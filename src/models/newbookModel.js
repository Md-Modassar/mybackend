const mongoose = require('mongoose');

const newbookschema=new mongoose.Schema({
    bookname:String,
    author_id:{
               type:Number,
               require:true
             },
    price:Number,
    ratings:Number,

},{timestamps:true})

module.exports=mongoose.model('newbook',newbookschema)