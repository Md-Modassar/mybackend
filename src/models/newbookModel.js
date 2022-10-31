const mongoose=require ("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const newbookSchema=new mongoose.Schema({
    name:String,
    author_id: {
        type:ObjectId,
        ref: "newauthor",
        require:true
    }, 
	price:Number,
		ratings:Number,
		publisher_id: {
            type:ObjectId,
            ref:"publisher1",
            require:true
                  

        },

},{timestamps:true})

module.exports=mongoose.model('newbooks2',newbookSchema)