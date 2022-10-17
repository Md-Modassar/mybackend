const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

  router.get('/move',function(req,res){
    const array=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send('that is array:'+array)
  })
  router.get('/moves/:index',function(req,res){
    
    const arr=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let index=req.params.index
    if(index<arr.length)
    {
    res.send( arr[index])
    }
    else{
        res.send("that is out of array")
    }
  })
  router.get('/films',function(req,res){
    const array=
    [ {
     id: 1,
     name: 'The Shining'
    }, {
     id: 2,
     name: 'Incendies'
    }, {
     id: 3,
     name: 'Rang de Basanti'
    }, {
     id: 4,
     name: 'Finding Nemo'
    }]
    res.send(array)
    
  })
  router.get('/films/:filmid',function(req,res){
    const array=
    [ {
     id: 1,
     name: 'The Shining'
    }, {
     id: 2,
     name: 'Incendies'
    }, {
     id: 3,
     name: 'Rang de Basanti'
    }, {
     id: 4,
     name: 'Finding Nemo'
    }]
    let filmid=req.params.filmid
    for(let i=0; i<array.length; i++)
    {
        const object=array[i]
          if(object.id==filmid)
          {
            res.send(array[filmid-1])
          }
    }

      res.send("that is not exsist")
        

  })
  
// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;