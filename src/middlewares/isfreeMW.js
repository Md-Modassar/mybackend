const express = require("express");

const isFreeAppUser1=function(req,res,next){
    let present=req.headers["isfreeappuser"]

    
     if(!present){
        return res.send("missing a mandatory header")
    }else
    
    next()
}

module.exports.isFreeAppUser=isFreeAppUser1