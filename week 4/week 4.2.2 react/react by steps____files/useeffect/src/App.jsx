import { useState } from 'react' 
import './App.css'
import { useEffect } from 'react'
import axios from "axios";
import { useMemo } from 'react';

// function App() {

//     const [selected,setSelectedId]=useState(1);

//   return <div>
//       <button onClick={function(){
//         setSelectedId(1);
//       }}>1</button>
//       <button onClick={function(){
//         setSelectedId(2);
//       }}>2</button>
//       <button onClick={function(){
//         setSelectedId(3);
//       }}>3</button>
//       <button onClick={function(){
//         setSelectedId(4);
//       }}>4</button>

     
//       <Todo id={selected}/>
//       </div>
// }


// // useEffect(()=>{}.[])



// function Todo({id}){
//   const [todos,setTodos]=useState({});


//   useEffect(()=> {
//     axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//     .then(response => {
//       setTodos(response.data.todos)
//     })
    
//   },[id]);
  
//   return <div>
//     Id:{id}
//     <h1>{todos.title}</h1>
//     <h2>{todos.description}</h2>
//   </div>
// }


// export default App

function App(){
    const [counter,setCounter]=useState(0);
    const [inputValue,setInputValue]=useState(1);
    

  let count=useMemo(() =>{

    let finalcount=0;
    for(let i=1;i<=inputValue;i++){
      finalcount=finalcount+i;
    }
    return finalcount;
  },[inputValue]);

    return <div>
      <input onClick={function(e){
        setInputValue(e.target.value);
         }} placeholder={"find sum from 1 to n"}></input><br></br>
         Sum from 1 to {inputValue} is {count}<br></br>

         <button  onClick={() =>{
          setCounter(counter+1);
         }}>Counter ({counter}) </button>
    </div>



}

export default  App;
