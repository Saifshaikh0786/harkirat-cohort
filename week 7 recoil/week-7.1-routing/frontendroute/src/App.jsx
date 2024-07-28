import {lazy, Suspense} from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route ,Routes, useNavigate} from 'react-router-dom'

const Dashboard= lazy(()=> import('./componenets/Dashboard'))
const Landing= lazy(()=> import('./componenets/Landing'))


function App() {
  
  return (
    <div>
    <BrowserRouter>
    <Appbar/>
    <Routes>
      {/* there is an eroor like the page is getting vanised if we are switching from one page to another page */}
       <Route path="/" element={<Suspense fallback={"Loading..."}><Landing/></Suspense>}/>
       <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard/></Suspense>}/>
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
    navigate("/Dashboard");
  }}>Dashboard</button><br></br><br></br>


      <div style={{background:"black",color:"white"}}>
          hi this is the top bar
      </div>

    </div>
    </div>
    )
}

export default App
