//Here we use schema 
// Schema means logical representation 
// here we create collection for our database(elecart)

const mongoose=require("mongoose");
let UserSchema=new mongoose.Schema(
    {
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
    }
);
let User=mongoose.model("user",UserSchema);

module.exports=User;