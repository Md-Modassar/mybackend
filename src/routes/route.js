const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newauthorController=require("../controllers/newauthorController")
const newbooksController=require("../controllers/newbooksController")

const newpublisherController=require("../controllers/newpublisherController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)


router.post("/createnewauthor",newauthorController.createnewauthor)
router.post("/createnewbooks",newbooksController.createnewbooks)

router.get("/getdataformbook",newbooksController.getbooksalongwith)

router.post("/newcreatepublish",newpublisherController.createnewPublisher)
router.put("/update",newpublisherController.updatehardcopy)
router.put("/updateprice",newbooksController.updateprice)
module.exports = router;