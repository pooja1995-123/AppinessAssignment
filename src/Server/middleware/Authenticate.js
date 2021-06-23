//verifying the token

const jwt=require("jsonwebtoken");
let Authenticate=(req,res, next)=>{
    if(!req.headers.authorization)
    {
        return res.status(401).json("UnAuthorized Access");//if no proper http headers
    }
    let token=req.headers.authorization.split(" ")[1];
    console.log(token)
    if(token===null){                                       //if token null
    return res.status(401).json("UnAuthorized Access");
}

    let payload=jwt.verify(token,process.env.S_KEY);
    if(!payload){                                           //if payload null
        return res.status(401).json("UnAuthorized Access");
    }
    req.user=payload.user;
    next();
    }

module.exports=Authenticate;