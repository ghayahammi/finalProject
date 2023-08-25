
const express = require('express');
const router = express.Router();
const Booking = require('../models/BookingCar');
const isAuth=require("../middleweare/isAuth")


router.post('/add',isAuth,async(req,res)=>{
    const {car,dateRetrait,dateRetour,totalePrice, isPaid}=req.body
const newBooking=new Booking({user: req.user,car,dateRetrait, totalePrice, isPaid})
await newBooking.save()
res.send({msg:"booking passed with success",newBooking})
})
module.exports=router

