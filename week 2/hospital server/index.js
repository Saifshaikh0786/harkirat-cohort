
// var users=[{
//     name:"saif",
//     metadata:[{
//         profilepic:"",
//         pronounce: "he/him",
//         address:[{
//             area:"ballia",
//             pincode:277207,
//             state:"utter pradesh",
//             district:"baliia"
//         }]
//     }]


// }]
// the above is for the knowlegde based only 




const express=require("express");
const app=express();
const port=100;
app.use(express.json());

const user=[{
    name: "saif",
    kidneys: [{
        healthy:false
    }]
}];
// remember about the query parameter
app.get("/",function(req,res){
    const saifkidney=user[0].kidneys;
    console.log("saif have kidneys: ",saifkidney);
    const nokid=saifkidney.length;
    let nohkid=0;
    for(let i=0;i<saifkidney.length;i++){
        if(saifkidney[i].healthy){
            nohkid++;
        }
    }
    const nounhkid=nokid-nohkid;
    res.json({
        saifkidney,
        nokid,
        nohkid,
        nounhkid
    })

});


// remember about the body parameter
app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    user[0].kidneys.push({
        healthy:ishealthy
    });
    res.json({
        msg:"done adding kidneys!"
    });
    
});
app.listen(port);










app.put("/",function(req,res){
    for(let i=0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy=true;
    }
    res.json({});

})

app.delete("/",function(req,res){
    const newkid=[];
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].healthy){
            newkid.push({
                healthy:true
            })

        }
    }
    user[0].kidneys=newkid;
    res.json({
        msg:"done"
    })

})
