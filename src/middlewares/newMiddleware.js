const ip=require('ip')
const newmiddelware=function(req,res,next){
     const url=req.originalUrl
     //const ipadd=req.ip
     const d_t=new Date()
     const time=d_t.getHours+" "+d_t.getMinutes
    console.log(ip.address())
   // console.log(ipadd)
    console.log(url)
    console.log(d_t+" "+time)
    next()

}


module.exports.newmiddelware=newmiddelware