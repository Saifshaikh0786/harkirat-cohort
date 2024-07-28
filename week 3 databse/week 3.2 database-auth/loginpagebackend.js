

const express=require("express");
const jwt=require("jsonwebtoken");
const jwtPassword="1234560";
const port=3333;
const app=express();
app.use(express.json());

const ALL_USER=[
    {
        username:"saifsiddique@gmail.com",
        password:"123",
        name:"saif"
    },
    {
        username:"kaif@gmail.com",
        password:"987",
        name:"kaif"
    },
    {
        username:"sujeet",
        password:"87654",
        name:"sujeet"
    },
];

function userExist(username,password){

    let userExist=false;
    for(let i=0;i<ALL_USER.length;i++){
        if(ALL_USER[i].username==username && ALL_USER[i].password==password){
            userExist=true;
        }
    }
    return userExist;
    
}

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(!userExist(username,password)){
         return res.status(403).json({
            msg:"invalid username and password"
        });
    }
    var token=jwt.sign({username:password},jwtPassword);
    return res.json({token,})
});


app.get("/user",function(req,res){
    const token=req.headers.authorization;
    try{
        const decode=jwt.verify(token,jwtPassword);
        const username=decode.username;
        res.json({
            users:ALL_USER
        })
    }
    catch(err){
        return res.json({msg:"invalid token",});
    }
});

app.listen(port);