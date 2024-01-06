const mongoose =require("mongoose");

const userSchem= mongoose.Schema({
   name:{
    type:"string",
    require:['password is require'],
   },
   lastname:{
    type:"string",
    require:['lastname is require'],
   },
   email:{
    type:"string",
    require:["email is require"],
    unique:true
   },
   password:{
    type:"string",
    require:["password is reruire"],
   },
   phone:{
    type:"string",
    require:["phone number is require"]
   },
   isAdmin:{
    type:Boolean,
    default:false
   }

},{timestamps:true})


const User = mongoose.model("User",userSchem)

module.exports= User