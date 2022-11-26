const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const multer=require('multer')
const { default: mongoose } = require('mongoose');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());
// app.use('/',function(req,res){
//     res.setHeader('Access-Control-Allow-Origin','*') 
// })

mongoose.connect("mongodb+srv://modassar123:modassar1234@test.ahxnnau.mongodb.net/group30Database", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/functionup', route)


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});
