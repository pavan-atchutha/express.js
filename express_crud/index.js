
const http = require("http");
const express= require("express");
const mongoose=require("mongoose");
const app=express();


mongoose.connect("mongodb+srv://pavankumar:Mongodb123@cluster0.h3de7jn.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const port=3000;
app.listen(port, () =>{
    console.log('Server started');
})


app.get('/hi',function(req,res){
    console.log('connected');
    res.status(200).json({message:"hi"});
})
const studentrouter= require("./routes/students");
app.use('/students',studentrouter)
module.exports=app;
