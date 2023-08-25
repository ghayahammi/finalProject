const mongoose=require("mongoose")
const schema=mongoose.Schema

const CarSchema=new schema({
    Marque:{
        type:String
    },
    Nbportes:{
        type:Number
    },
    boiteVitesse:{
        type:String
    },
   
    annèe:{
        type:Number
    },
    prix:{
        type:String
    },
    image:{
        type:String
    },
    dispo:{
        type:Date,
       
    }
})
module.exports=Car=mongoose.model("Car",CarSchema)