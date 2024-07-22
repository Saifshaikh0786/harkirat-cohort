// npm init -y
// npm install express
// const express=require("express");

const express=require("express");
const port=3000
const app=express();

app.get('/',function(req,res){
    res.send("hello saif siddique")
})

app.listen(port)