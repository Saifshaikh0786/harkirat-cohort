

const express=require("express");
const app=express();
const zod=require("zod");
const port=999;

// make a zod schema of the following requiremnts 

// {
//     email: string looks like email
//     pasword:8 length
//     countrt: IN/US
// }


function validateInput(obj){


const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal("IN").or("USA"),
    // kidney:zod.array(zod.number())

})

    const response=schema.safeParse(obj);
    console.log(response)
}

// validateInput({
//     email:"saif@gmail.com",
//     password:"12345678",
//     country:"IN"
    
// });

// either you can give input as above aor you can use it in your http server as below 

app.post("/",function(req,res){
    const response=validateInput(req.body)
    if(!response.success){
        res.json({msg:"invalid input"})
        return ;
    }
})

app.listen(port);