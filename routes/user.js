const express=require("express")
const User=require("../models/user")
const router=express.Router()
const bcrypt=require("bcrypt")
var jwt = require('jsonwebtoken');
const isAuth=require("../middleweare/isAuth")
const isAdmin=require("../middleweare/Admin")


router.post("/register",async(req,res)=>{
    const{name,email,lastName,password}=req.body
    let user=await User.findOne({email})
    if(user){
       return res.send({msg:"user already exists !"})
    }
user=new User({
    name,email,password,lastName
})
const salt=10
let hashedPassword= await bcrypt.hash(password,salt)
user.password=hashedPassword
 await user.save()

const payload={
    id:user._id
}
 var token = jwt.sign(payload,'ayayt');



 res.send({msg:"user added with success !",user,token})

})


router.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
    let user=await User.findOne({email})
    if(!user){
     return    res.send({msg:"user not found !"})
    }
    let isMatch= await bcrypt.compare(password,user.password)

if(!isMatch){
   return  res.send({msg:"Bad credentials !  password"})
}
const payload={
    id:user._id
}
 var token = jwt.sign(payload,"yettret");


res.send({msg:"user logged with success !",user,token})

    }
    catch(error){
        res.send({msg:error})
    }

})


router.get("/user",isAuth,(req,res)=>{
    res.send({user:req.user})
})
  


router.delete('/:id',isAuth, async(req,res)=>{
    const {id}=req.params

    const user=await user.findOneAndDelete({_id:id})
    res.send({msg:"user deleted",user})
    })
 
module.exports=router