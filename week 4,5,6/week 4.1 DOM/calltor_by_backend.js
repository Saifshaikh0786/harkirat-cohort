

const express=require("express");
const app=express();
const port=1111;
app.use(express.json());


app.get("/sum",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const sum=a+b;
    res.send(sum.toString());

});


app.get("/intrest",function(req,res){
    const princple=parseInt(req.query.princple);
    const rate=parseFloat(req.query.rate);
    const time=parseInt(req.query.time);
    const intrest=(princple*rate*time)/100;
    const total=princple+intrest;
    res.send({
        total:total,
        intrest:intrest,
    });
});

app.listen(port);