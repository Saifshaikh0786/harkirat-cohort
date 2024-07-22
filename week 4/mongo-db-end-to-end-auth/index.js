

const { default: mongoose } = require("mongoose");
const { string } = require("zod");
const express=require("express");
const app=express();
const port=5500;

mongoose.connect('mongodb+srv://admin:gmYrxFt95WXs2yf@cluster0.82pmbqi.mongodb.net/');

const AdminSchema=new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema=new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourse:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]

});

const CourseSchema=new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
});

const Admin=mongoose.model('Admin',AdminSchema);
const User=mongoose.model('User',UserSchema);
const Course=mongoose.model('Course',CourseSchema);

module.exports={
    Admin,
    User,
    Course
}

app.listen(port);