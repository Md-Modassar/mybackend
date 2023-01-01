const express = require('express')
const mongoose = require('mongoose')
const route = require('./route/route')
const app = express()
const multer = require('multer')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(multer().any())

mongoose.connect('mongodb+srv://modassar123:modassar1234@test.ahxnnau.mongodb.net/cowindatabase', {
    useNewUrlParser: true
}, mongoose.set('strictQuery', false))
    .then(() => console.log("mongoose is connected"))
    .catch(err => console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
