let axios=require('axios')

let wetherconro=async function(req,res){
    try{
        let option={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=London&appid=5949c94591f44689980da6b4d585eca7`
        }

        let result = await axios(option)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
        
    }catch(error){
        res.send({error})
    }
}

module.exports.wetherconro=wetherconro