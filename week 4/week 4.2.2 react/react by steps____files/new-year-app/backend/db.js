

const mongoose=require("mongoose");
const { boolean } = require("zod");


mongoose.connect("");

const todoSchema=mongoose.Schema({
    title:String,
    Description:String,
    Completed:boolean
});


todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}