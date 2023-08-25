const mongoose=require("mongoose")
const schema=mongoose.Schema

const bookingSchema=new schema({
  user: {
    type:mongoose.Schema.Types.ObjectId,ref:'User',required:true
  },
  car:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Car',
    required:true

  },
  dateRetrait:{
    type:Date,
    required:true
  },
  dateRetour:{
    type:Date,
    required:true
  },
 
  totalePrice:{
    type:Number,
    required:true
  },
  isPaid:{
    type:Boolean,
    default:false

  },
 
})

module.exports=book=mongoose.model("booking",bookingSchema)