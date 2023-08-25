const mongoose=require("mongoose")
const schema=mongoose.Schema

const userSchema=new schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
   ,
   phone:{
    type: Number
   },

   isAdmin: {
    type: Boolean,
    default: false,
  },

})

module.exports=User=mongoose.model("users",userSchema)