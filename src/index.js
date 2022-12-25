const express=require('express')
const mongoose=require('mongoose')
const route=require('./route/route.js')
const app=express()
const multer=require('multer')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(multer().any())

mongoose.connect("mongodb+srv://shyamgupta:.T!8NRrzf6FyMYc@cluster0.dbdyccj.mongodb.net/customer",{
    useNewUrlParser:true},mongoose.set('strictQuery', false))
.then(()=>console.log("mongodb is connected"))
.catch(Error=>console.log(Error))

app.use("/",route)
app.listen(process.env.PORT||3000,function(){
    console.log("express app running on PORT"+" "+(process.env.PORT || 3000))
})

