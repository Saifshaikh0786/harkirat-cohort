

const express=require("express");
const { createTodo, updateTodo } = require("./types");
const {todo}=require("./db");
const app=express();
const port=5500;
app.use(express.json());



app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload); 
    if(!parsePayload.success){
        res.status(411).json({msg:"You sent the wrong inputs"});
        return;
    }
    // creating database and putiing data into it
    await todo.Create({
        title:createPayload.title,
        description:createPayload.description,
    })
    res.json({msg:"Todo created"});

})

app.get("/todos",async function(req,res){
    const todos=await todo.find({});
})

app.put("/completed",async function(req,res){
    const createPayload=req.body;
    const parsePayload=updateTodo.safeParse(createPayload);
    if(!parsePayload.success){
        req.status(411).json({msg:"You sent the wrong input"});
        return;
    }
    await todo.update({
        _id:req.body.id},
        { completed:true

    })
})

app.listen(5500);