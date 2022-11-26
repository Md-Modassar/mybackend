const express=require("express")
const router=express.Router()
const internController=require("../controllers/InternController")

const collegeValidator=require('../Middlewares/collegeValidator')
const collegeController=require('../controllers/collegeController')

router.post('/colleges',collegeValidator.collegeValidator,collegeController.createCollege)
router.get("/collegeDetails",collegeController.getcollegedetails)

//-----------------------> create Intern <----------------------------->>
router.post("/interns",internController.createIntern)

//-----------------------> error handling route <----------------------->>
router.all("/*",function(req,res){
    return res.status(404).send({status:false,msg:"path not found"})
})

module.exports=router;



