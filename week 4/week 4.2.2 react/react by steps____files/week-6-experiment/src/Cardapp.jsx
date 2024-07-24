




import { useState } from "react"


function App() {
  
  
  return (
    <div>
      <HeaderwithButton/> 
     <Header title="Rahmat fatima"/> 
    </div>
  )
}



function HeaderwithButton(){
  
  const [title,setTitle]=useState("my name is Saif siddique");

  function UpdateTitle(){
    setTitle("my name is "+Math.random());
    
  }
  return <div>
  <button onClick={UpdateTitle}>Update title</button>
  <Header title={title}></Header>
  </div>
}

function Header({title}){
  return <div> 
    {title}
  </div>
}






export default App



