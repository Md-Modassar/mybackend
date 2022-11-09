const axios=require('axios')

let mamsget=async function(req,res){
   try{
    let  id=req.query.template_id //129242436
  // text0 <text you want as a caption>

 //  text1 <optional>
      //  let template_id=
             let test=req.query.text0 
            let text1=req.query.text1

            let Username=req.query.username
           let  password=req.query.password
           let option={
                    method:"post",
                    url:`https://api.imgflip.com/caption_image?username=${Username}&password=${password}&text0=${test}&text1=${text1}&template_id=${id}`
           }
           let result = await axios(option)
           console.log(result.data)
           res.status(200).send({ msg: result.data })
        }catch(error){
            res.send({error})
        }
           
           
   
}


module.exports.mamsget=mamsget