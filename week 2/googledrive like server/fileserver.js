

// if nayone goes to that server they can see their texts that thsye had wrote 

const fs=require("fs");
const express=require("express");

const app=express();
const port=1004;

// /files/:fileName by thus you can get anything which is after the search  


app.get("/files/:fileName",function(req,res){
    // will give acces to name
    const name=req.params.fileName;
    console.log(name);
    fs.readFile(name,"utf-8",function(err,data){
        
        res.json({
            data
        });   
    });
});

app.listen(port);