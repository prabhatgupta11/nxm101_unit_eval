const express=require("express")
const {UserModel}=require("./model/User.model")
const userRouter=express.Router();
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")



userRouter.post("/register",async(req,res)=>{
    const {name,email,gender,password,age,city}=req.body
    try{
        bcrypt.hash(pass,5,async(err,hash)=>{
            if(err)
            {
                res.send({"msg":"something went wrong","error":err.message})
            }
            else{
                const user=new UserModel({name,email,gender,age,city,password:hash})
                await user.save()
                res.send({"msg":"new user has been register"})
            }
        });
    }catch(err){
        res.send({"msg":"something went wrng while register","error":err.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=(req.body)
    try{
        const user=await UserModel.find({email})
        if(user.length>0)
        {
            bcrypt.compare(password ,user[0].password,(err,result)=>{
                if(result)
                {
                    let token=jwt.sign({userID:user[0]._id},"masai")
                    res.send({"msg":"login sucessfull","token":token})
                }
                else{
                    res.send({"msg":"wrong credential"})
                }
            });

        }else{
            res.send("something went wrong while login")
        }
    }catch(err){
        res.send(err)
        console.log("something went wrong in login section")
    }
})

module.exports={
    userRouter
}