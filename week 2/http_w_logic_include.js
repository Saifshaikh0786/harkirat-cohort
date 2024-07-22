
const express=require("express");
const port=3040;

 

function calculatesum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans=ans+i;
    }
    return ans;
}

const app=express();

app.get("/",function(req,res){
    const n=req.query.n; 
    const answer=calculatesum(n)
    res.send("your answer is : " + answer.toString());
    // res.send("the sum is : ") not print coz one will work in one time only 
})

app.listen(3040);

// function add(a,b){
//     return a+b;
// }

// app.get('/',function(req,res){
//     const a=req.query.a;
//     const b=req.query.b;
//     const  ans1=add(a,b);
//     app.send(ans1);

// });

