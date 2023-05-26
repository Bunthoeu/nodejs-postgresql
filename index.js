
const express = require("express");
const userRouter=require("./routes/user_route")
const app=express();
const dotenv=require("dotenv")
dotenv.config()


app.use(express.json())

app.use(express.urlencoded({extended:false}))

//create connectionn DB
app.use('/user',userRouter)
//app.use('/create',userRouter)
 app.listen(process.env.PORT,(req,res)=>{
    
    console.log("http://localhost:8080")

});