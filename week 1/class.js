// const dog= {
//     name:"doggie",
//     legcount:4,
//     speaks:"barsk"



// }


// const cat ={
//     name:"cat",
//     legcount:4,
//     speaks:"meoww"
// }

// function anstr(animal){
//     console.log("animal"+" "+animal["name"]+" "+animal["speaks"]);

// }

// anstr(cat)





// class animals{
//     constructor(name,legcount,speaks){
//         this.name=name;
//         this.legcount=legcount;
//         this.speaks=speaks
//     }
//     speak(){
//         console.log("hi there "+ this.speaks);
//     }

// }

// let dog=new animals("dog",4,"bhow bhow");
// let cat=new animals("cat",4,"meow meow "); 
// cat.speak();


// const cdate=new Date();
// console.log(cdate.getMonth()+1);
// console.log(cdate.getFullYear());


function cutime(){
    console.log(new Date().getTime());
}
setInterval(cutime,1);