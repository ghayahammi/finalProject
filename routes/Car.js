const express=require("express")
const router=express.Router()
const Car=require('../models/Car')
const isAuth=require("../middleweare/isAuth")
const isAdmin=require("../middleweare/Admin")
 
router.post('/add',async(req,res)=>{
    const {Marque,Nbportes,puissance,type,annèe,prix, image,dispo}=req.body
const newCars=new Car({Marque,Nbportes,puissance,type,annèe,prix,image,dispo})
const Cars= await newCars.save()
res.send({msg:"Car added",Cars})
})
 
router.delete('/:id',async(req,res)=>{
    const {id}=req.params
    console.log(id,"rtyuiop")
    const Cars=await Car.findOneAndDelete({_id:id})
    res.send({msg:"Car deleted",Cars})
    })

    router.put('/edit/:id',isAuth,isAdmin,async(req,res)=>{
        const{id}=req.params
        const Cars=await Car.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
        res.send({msg:'contact edited',Cars})
    })

    router.get("/cars",async(req,res)=>{
const cars=await Car.find()

res.send({msg:"users list",cars})
    })
module.exports=router