
const {Admin, Course}=require("../db");
const express=require("express");
const adminMiddleware=require("../middleware/admin");
const router=express.Router();

router.post('/signup',async function(req,res){
    // admin signup logic 
    const username=req.body.username;
    const password=req.body.password;
    //check if the user with name exist or not 
    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        msg:"Admin created successfully "
    })  
});


router.post('/courses',async function adminMiddleware(req,res){
    const title=req.body.titlel;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
   const newCourse=await Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })
    res.json({
        msg:"Course created successfully",courseId: newCourse._id
    })


});



router.get('/courses',async function adminMiddleware(req,res){
    const response=await Course.find({});
    res.json({
        Courses:response
    })


});

module.exports=router;