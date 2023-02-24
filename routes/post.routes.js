const express=require("express")
const {PostModel}=require("../model/post.model")

const postRouter=express.Router();

postRouter.get("/",async(req,res)=>{
    const posts=await PostModel.find()
    res.send("posts")
})



postRouter.delete("/deletepost/:id",async(req,res)=>{
    const postID=req.params.id
  await PostModel.findByIdAndDelete({_id:noteID})

  res.send({"msg":`post with id ${postid} has been deleted`})


})


postRouter.patch("/updatepost/:id",async(req,res)=>{
    const postID=req.params.id
  await PostModel.findByIdAndUpdate({_id:noteID})

  res.send({"msg":`post with id ${postid} has been deleted`})


})

module.exports={
    postRouter
}