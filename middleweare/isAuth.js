const jwt=require("jsonwebtoken")
const User=require("../models/user")
const isAuth=async(req,res,next)=>{
    try{
const token=req.headers["authorization"]
console.log(token,"hfgfgfgfggfg")
if(!token){
    return res.send({msg:"No token !"})
}
const decoded= await jwt.verify(token,"yettret")
console.log(decoded,"test")

const user= await User.findById(decoded.id)
console.log(user,"userrr")
if(!user){
    return res.send({msg:"no user with this token !"})
}
console.log(user,'hhhh')

req.user=user
next()
    }
    catch(error){
        console.log(error)
    }
}

module.exports=isAuth