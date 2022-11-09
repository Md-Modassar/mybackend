let axios=require('axios')

let getdest = async function (req, res) {
  try {
      let distid = req.query.district_id
      let date=req.query.date
      
    //  console.log(`body is : ${blahhh} `)
      var options = {
          method: "get",
          url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${distid}&date=${date}`,
          
      }

      let result = await axios(options)
      console.log(result)
      let data=result.data
      res.status(200).send({ msg:data })
  }
  catch (error) {
      console.log(error)
      res.status(500).send({ msg: error})
  }
}


module.exports.getdest=getdest