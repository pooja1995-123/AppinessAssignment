const express=require("express");
const router=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const User = require("../model/User");


router.post("/login",async(req,res)=>{
   
    let {email,password}=req.body;
    
    let user=await User.findOne({email:email});
    if(!user){
     return res.status(401).json({error:"Go for registration"});
    }
    let result=await bcrypt.compare(password,user.password);
   console.log(result)
    if(!result)
         {
     return  res.status(401).json({status:"Incorrect password"});
     }
     let payload={
         user:{
             id:user.id,

         },
     };
     jwt.sign(payload,process.env.S_KEY,(err,token)=>{
         if(err) throw err;
         res.status(200).json({status:"Login successfully",
                              token:token
                            })
     })
})
    
module.exports=router;