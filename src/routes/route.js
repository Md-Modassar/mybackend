const express = require('express');
const router = express.Router();///test-you
//importing a custom module
//const xyz = require('../logge1')
const a=require("../logger/logger")
const a2=require("../util/helper")
const a3=require("../validator/formatter")
const a1=require("../cheunk")
//const a=

//importing external package
const underscore = require('underscore')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    //console.log("Calling my function ",xyz.myFunction1())
   // console.log("The value of the constant is ",xyz.myUrl)
    console.log("that is first problem",a.myFunction())
    console.log("that is my second problem",a2.myday())
    console.log("that is my thrid problem",a3.myfun())
    console.log("that is mychank",a1.mychunk())
    console.log("that is my arrays",a1.mytail())
    console.log("that is my uniq",a1.myunion())
    console.log("that is my pairs",a1.mypairs())
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

