const newbookModel=require("../models/newbookModel")
const authorModel=require("../models/authorModel")

const newcreatebookrecod=async function(req,res){
    let data=req.body
    let savedData=await newbookModel.create(data)
    res.send({msg:savedData})
}

// const listofbook=async function(req,res){
//     const arthordetail= await authorModel.find({author_name:'Chetan Bhagat'}).select({author_id:1,_id:0})
//     const ba=await arthordetail.author_id
//     const bookdetail= await newbookModel.find({author_id:arthordetail.author_id})
//     res.send({book:ba})
   
// }
const updateprice=async function(req,res){
    let bookrecode=await newbookModel.findOneAndUpdate({bookname:"Five Point Someon" },{$set:{ price:100}}).select({price:1,author_id:1,_id:0})
        
        const a=bookrecode.author_id
       let arthorrec= await authorModel.find({author_id:a}).select({author_name:1,_id:0})
        //res.send({arthorrec,bookrecode})
       res.send({arthorrec,bookrecode})
    
 }

 const bookselect=async function(req,res){
    let bookrecod=await newbookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
   
    //let c=bookrecod.author_id
    const reco=bookrecod.map(x=>x)
    const arr=[]
       for(let i=0; i<reco.length; i++)
       {
         arr.push(reco[i].author_id)
       }
        let auth=await authorModel.find({author_id:{$in:arr}}).select({author_name:1,_id:0})

   // const a=bookrecod.
       
    
    
   //let aruthorrecode=await authorModel.find({author_id:{$in:[c]}})
    res.send({auth})
}
module.exports.newcreatebookrecod=newcreatebookrecod
// module.exports.listofbook=listofbook
module.exports.updateprice=updateprice
module.exports.bookselect=bookselect