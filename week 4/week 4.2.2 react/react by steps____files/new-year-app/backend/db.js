

const mongoose=require("mongoose");
const { boolean } = require("zod");


mongoose.connect("mongodb+srv://admin:gmYrxFt95WXs2yf@cluster0.82pmbqi.mongodb.net/todoapp");

const todoSchema=mongoose.Schema({
    title:String,
    Description:String,
    Completed:boolean
});


todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}