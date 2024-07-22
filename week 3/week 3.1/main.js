


const express=require("express");
const app=express();
const port=999;


app.get("/health",function(req,res){
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyId=req.query.kidneykid;
    if(username=="saif" && password=="pass"){
    if(kidneyId==1 || kidneyId==2){
        res.json({
            msg:"kid is fine "
        });
        }
    else{
        res.json({
            msg:"bad kdney"
        })
    }
    }
    res.json({
        "msg":"something is went wrong"
    })


});

app.listen(port);