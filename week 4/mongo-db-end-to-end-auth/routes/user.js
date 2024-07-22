

const {Router}=require("express");
const router=Router();
const userMiddleware=require("../middleware/user");
const { Course } = require("../db");


router.post('/signup',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    User.create({
        username:username,
        password:password
    })
    res.json({
        msg:"User account created successfully "
    })

});



router.get('/courses',async function(req,res){
    // implement listing all the courses 
    const allcourses=await Course.find({});
    res.json({
        courses:allcourses
    })

});


router.post('/courses/:courseId',function userMiddleware(req,res,next){
    // implemt course purchase logic
    const courseId=req.body.courseId;
    const username=req.body.username;
    
    User.updateOne({
        purchasedCourse:{
            "$push":courseId
        }
    });
    res.json({
        msg:"purchased completed"
    })

});