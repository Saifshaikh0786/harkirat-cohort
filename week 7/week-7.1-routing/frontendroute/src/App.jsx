import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route ,Routes, useNavigate} from 'react-router-dom'
import { Dashboard } from './componenets/Dashboard'
import { Landing } from './componenets/Landing'


function App() {
  
  return (
    <div>
    <BrowserRouter>
    <Appbar/>
    <Routes>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/" element={<Landing/>}/>
    </Routes>

  </BrowserRouter>
  </div>
  )
  
  
  
}


function Appbar() {
  const navigate=useNavigate();
  return (
    <div>
    <div>
    <button onClick={() =>{
      navigate("/");
    }}>Landing page</button> <br></br><br></br>

  <button onClick={() => {
    navigate("/dashbord");
  }}>Dashboard</button><br></br><br></br>


      <div style={{background:"black",color:"white"}}>
          hi this is the top bar
      </div>

    </div>
    </div>
    )
}

export default App
