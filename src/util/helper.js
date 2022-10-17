
const d_t=new Date()
let month = d_t.getMonth();
let day = d_t.getDate();
let gitBatchInfo=function(){console.log('Radon, W3D3, the topic for today is Nodejs module system')

}
let mydays =function(){
    console.log(day)
    console.log(month+1)
    console.log(gitBatchInfo())
 return "done"

}
let abc = 2022 
module.exports.myday=mydays
