

// we can use waits async wait at THRE PLACE OF THIS LIKE
// waitfor(100);
// console.log("hi there ")

setTimeout(function (){
    console.log("hi there");

    setTimeout(function(){
        console.log("this is the second one");
    },2000)


},1000)

