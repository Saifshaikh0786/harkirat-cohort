

// fs=file system that allow to reading a file and writing a file

const fs=require("fs");


fs.readFile("a.txt","utf-8", function(err,data){
    console.log(data)
})


console.log("this is the synchonas function so it will run first as it wiltake less time in comparison to the asychronas function function ")