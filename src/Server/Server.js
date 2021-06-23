const express=require("express");
const app=express();

const dotenv=require("dotenv");
const cors=require("cors");

const morgan=require("morgan"); 
const mongoose=require("mongoose");


//configure cors with express
app.use(cors());
app.use(express.json({limit: '150mb'}));


//Application middleware loggern
app.use(morgan("tiny"));

//accept the form data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

dotenv.config({path:"./config/config.env"});
const PORT=8000 ||process.env.PORT

//Test API
app.get("/",(req,res)=>{
    res.send("<h1>Ecart application running successfully......</h1>")
})
//connect with mongodb
mongoose.connect(process.env.MONGODB_LOCAL_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,})
.then((response)=>{
    console.log("Mongo DB connected Successfully");
})
.catch((err)=>{
    console.log("Error")
})

//Routers
app.use("/user",require("./router/userRouter"));

app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`Server is running on port number ${PORT}`)
});