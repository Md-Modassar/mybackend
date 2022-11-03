const mongoose=require ("mongoose")

const newauthorSechema=new mongoose.Schema({
    authorName:{
		 type:String,
		 require:true
	},
		age:Number,
		address:String,
rating: Number

},{timestamps:true})

module.exports = mongoose.model('newauthor',newauthorSechema)