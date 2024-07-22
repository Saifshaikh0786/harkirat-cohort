

const express=require("express");
const port=3000;
const app=express();



app.post('/conversations',function(req,res){
    // on req parameters all tge req are sended 
    // on res everthing is displayed on the webpage 
    res.send('<b>hello this is the https server making useing express<b> ')
    console.log(req.headers )
    res.send({
        msg:"2+2=4"
    })
   
})
app.get('/',function(req,res){
    // on req parameters all tge req are sended 
    // on res everthing is displayed on the webpage 
    res.send('<b>hello i am  saif siddique<b> ')
   
})

app.get('/A',function(req,res){
    // on req parameters all tge req are sended 
    // on res everthing is displayed on the webpage 
    res.send('<b>hello i am  saif siddique<b> ')
   
})
app.get('/B',function(req,res){
    // on req parameters all tge req are sended 
    // on res everthing is displayed on the webpage 
    res.send('<b>hello i am  kaif siddique<b> ')
   
})
app.get('/C',function(req,res){
    // on req parameters all tge req are sended 
    // on res everthing is displayed on the webpage 
    res.send('<b>hello i am sovik<b> ')
   
})
app.get('/D',function(req,res){
    // on req parameters all tge req are sended 
    // on res everthing is displayed on the webpage 
    res.send('<b>hello i am  sujeet<b> ')
   
})


app.listen(port,function(req,res){
    console.log('hi i am saif siddque ')
})






