

const express=require("express");
const app=express();
const port=8888;

// famous req handler is claculate req 
let numberofreq=0;
function calaculatereq(req,res,next){
    console.log(numberofreq);
    calaculatereq++;
}
app.get("/",calaculatereq,function(req,res,){

})


function userMiddleware(req,res,next){
    if(username!="saif" && password!="pass"){
        res.json({msg:"inalid username and passwoerd"});
    }
    else{
        next();
    }
};

function kidneyMiddleware(res,req,next){
    if(kideneyId!=1 && kideneyId!=2){
        res.json({msg:"incorrect input of kideny id "});
    }
    else{
        next();
    }
};

app.get("/health",userMiddleware,kidneyMiddleware,function(req,res){
    res.send("your health is healthy");
});

app.listen(port);