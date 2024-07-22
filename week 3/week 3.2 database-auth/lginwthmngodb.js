
const express=require("express");
const mongoose=require("mongoose");
const port=999;
const app=express();

app.use(express.json());
const bodyParser = require("body-parser");
// app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:gmYrxFt95WXs2yf@cluster0.82pmbqi.mongodb.net/saif")



const User= mongoose.model('Users', { name: String, email:String, password:String });


app.post("/signin",async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const existinguser= await User.findOne({email:username});

    if(existinguser){
        res.status(400).json({msg:"user already exists "});
    }

    const  user= new User({
         name:name,
         email: username,
         password:password,    
        });

    await user.save();
    res.json({
        "msg":"account created succcesfully"
    });
})

app.listen(999);







