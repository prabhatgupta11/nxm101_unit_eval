const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    name:String,
    email:String,
    gender : String,
    password:String,
    age:Number,
    city:String
})

const UserModel=mongoose.model("ldin",userschema)

module.exports={
    UserModel
}