

const express=require("express");
const app=express();
const zod=require("zod");
app.use(express.json());
const port=777;

// const schema=zod.array(zod.number());

const schema=zod.object({
    email:zod.string(),
    password:zod.string(),
    country:zod.literal("IN").or("USA"),
    kidney:zod.array(zod.number())

})

app.post("/health-checkup",function(req,res){
    const kideny=req.body.kideny;
    const response=schema.safeParse(kideny);
    if(!response.success){
        res.status(404).json({msg:"input is invalid"})
    }
    else{
        
        res.send({
            response
        })
    }
});

app.listen(port);

