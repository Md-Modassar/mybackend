const { request } = require("http")

const isFreeAppUser = function(req,res,next){
   // let head=req.header["isFreeAppUser"]
   let present = req.headers
   
     if(!present)
     {
        res.send("that is menetery")
        
     }else
        isFreeAppUser=isFreeAppUser==='true'?true:false
        req.isFreeAppUser=isFreeAppUser
        next()
     
   /* let result =req.body["isFreeAppUser"]
    if(result==false)
    {
        //res.send("that is missing")
       // request.setHeader(result)
        next()
    }
    else if(!result)
    {
        res.send("that is missing")
    }else{
       // request.setHeader(result)
      // res.setheader("isFreeAppUser","true")
        next()
    }*/
}

module.exports.isFreeAppUser=isFreeAppUser