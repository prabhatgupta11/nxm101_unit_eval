const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/users.routes")
const jwt=require("jsonwebtoken")
const {postRouter}=require("./routes/post.routes")
const {authenticate}=require("./middleware/authenticate.middleware")
const cors=require("cors")
require("dotenv").config()

const app=express()
app.use(cors())
app.use(express.json())

app.get("/home",(req,res)=>{
    res.send("this is home page")
})

app.use("/users",userRouter)
app.use("/post",postRouter)
app.use(authenticate)


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to database")
    }catch(err){
        console.log(err.message)
    }
})