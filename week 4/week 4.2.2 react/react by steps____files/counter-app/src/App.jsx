import { useState } from 'react'

import './App.css'


// state 

function App() {
  const [todos ,setTodos]=useState([{
    title:"Go to gym",
    description:"go to gym from 9-11",
    completed:false
  },{
  title:"Study DSA",
  description:"from 9-11",
  completed:false}
  ,{
    title:"parctive web dev",
    description:"from 11-7;",
    completed:false},
]);


  function addTodo(){
    setTodos([...todos,{
      title:"new todo",
      description: "des of new todo",
    },
  ]);
  }
  
  return (
    <div>
      
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}/>
      })}
      <button onClick={addTodo}>Add random todos list</button>


    </div>
      
  );
}

function Todo(props){

  return (<div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
   
  </div>
  );

}

export default App
