const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const vaccinationController=require("../controllers/vaccinationController")
const weatherController=require("../controllers/wetherController")
const mamsController=require("../controllers/mamsController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
//router.get("/cowin/getdist",CowinController.getdest)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/vactionget",vaccinationController.getdest)
router.get("/wetherget",weatherController.wetherconro)
router.post("/mamsPost",mamsController.mamsget)


module.exports = router;