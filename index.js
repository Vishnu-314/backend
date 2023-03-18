const connectTOMongo=require("./db")
const express=require('express');
const mongoose=require("mongoose")
mongoose.set('strictQuery',false)

const app=express()
const PORT=5000;
var cors=require('cors')
app.use(cors())
app.use(express.json())

connectTOMongo();

app.use('/api/todo',require('./routes/todo'))

app.get('/',(req,res)=>{
    res.send("To DO List")
})

app.listen(PORT,()=>{
    console.log(`app is listening at port ${PORT}`)
})