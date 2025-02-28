const express=require('express')
require('dotenv').config()

const app=express()
app.use(cors())
app.use(express.json())


const port= process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("Welcome to Mera server")
})

app.listen(port,()=>{
    console.log("Mera Server Running");
})

