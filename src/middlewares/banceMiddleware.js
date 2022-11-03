const newUserModel=require('../models/newUserModel')
const productModel=require('../models/producrModel')
const balanceUpdate=async function(req,res,next){
  const present=req.headers["isfreeappuser"]
  const bal=await newUserModel.findOne().select({balance:1,_id:0})
 // const bal1=balance.map(x=>x)
  const pri=await productModel.findOne({$eq:{price:balance}}).select({price:1,_id:0})
  //const pri=price.map(x=>x)

 if(!present)
  {
    if(bal.balance<pri.price)
    {
      const update=await newUserModel.findOneAndUpdate({$eq:{balance:pri}},{$set:{balance:bal.balance+pri.price}})
      next()
    }
    
    
    
  }


  
}

module.exports.balanceUpdate=balanceUpdate