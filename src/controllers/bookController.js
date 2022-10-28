const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")
const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE
// const newcreatebookrecod=async function(req,res){
//     let data=req.body
//     let savedData=await bookModel.create(data)
//     res.send({msg:savedData})
// }

// const listofbook=async function(req,res){
//     const arthordetail= await Use.find({author_name:'Chetan Bhagat'}).select({author_id:1,_id:0})
//     const a=arthordetail.author_id
//     const bookdetail= await bookModel.find({author_id:arthordetail.author_id})
//     res.send({bookdetail})
   
// }
// const updateprice=async function(req,res){
//     let bookrecode=await bookModel.findOneAndUpdate({bookname:"The 3 Mistakes of My Life" },{$set:{ price:100}}).select({price:1,author_id:1,_id:0})
    
//     const a=bookrecode.author_id
//     let arthorrec= await UserModel.find({author_id:a}).select({author_name:1,_id:0})
//     //res.send({arthorrec,bookrecode})
//    res.send({arthorrec,bookrecode})

// }
// const bookselect=async function(req,res){
//     let bookrecod=await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
//     let c=bookrecod.author_id
//    let aruthorrecode=await userModel.find({author_id:{$in:[c]}})
//     res.send({bookrecod})
// }

const update=async function(req,res){
    let updata=await userModel.updateMany({author_id:1},
        {$set:{age:34}},
        {new:true})
        res.send({updata})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
// module.exports.newcreatebookrecod=newcreatebookrecod
// module.exports.listofbook=listofbook
//module.exports.updateprice=updateprice
// module.exports.bookselect=bookselect
module.exports.updata=update