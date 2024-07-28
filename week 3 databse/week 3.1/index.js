

const express=require("express");
const app=express();
const port=1111;

app.use(express.json());

app.post("/health-checkup",function(req,res){
    const kideny=req.body.kideny;
    const kidneylength=kideny.length;
    // array
    if(!kideny){
        res.json({msg:"wrong input"});
    }
    else{

        res.send("you have "+ kidneylength +"kideneys");
    }

});

// global catch 
app.use(function(err,req,res,next){
    res.json({"msg":"Sorrry somthing is wromng our serevr"})
});

app.listen(1111)
