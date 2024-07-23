import { useState } from "react";

 

 export function CreateTodo(){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")

    return <div>
        <input style={{
            padding:10,
            margin:10
        }}
         type="text" placeholder="Todo" onChange={function(e){
            const value=e.target.value;
            setTitle(e.target.value);
         }}></input><br></br><br></br>
        
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Description" onChange={function(e){
            const value=e.targe.value;
            setDescription(e.target.value);
        }}></input><br></br><br></br>

        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("https://localhost/3000/todos",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then( async function(res){
                const json=await res.json();
                alert("Todos added");
            })
        }}>Add a todo</button>
    </div>
 }