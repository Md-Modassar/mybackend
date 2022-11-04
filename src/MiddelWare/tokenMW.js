const jwt=require("jsonwebtoken")

const tokenmiddelware=function(req,res,next)
{
    let token=req.headers["x-lithium-token"]
    if(!token)
    {
        return res.send({status:false,msg:"token must be present"})   
    }
    console.log(token)
    let decodedToken= jwt.verify(token, "functionUp-Lithum-very-very-secret-key");
   if(!decodedToken)
   return res.send({status:false, msg:"token is invalide"})

    next()
}

module.exports.tokenmiddelware=tokenmiddelware