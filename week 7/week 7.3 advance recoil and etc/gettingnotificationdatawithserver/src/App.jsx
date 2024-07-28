import { useEffect, useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { notifications,tn } from './atoms'
import axios from 'axios'

function App() {
 

  return (
    <>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
     
    </>
  )
}


function MainApp(){
  const netc=useRecoilValue(notifications);
  const tnn=useRecoilValue(tn);

  return (
    <>
    <button>Home</button>
    <button>My network <sup>({netc.network >=100?"99+":netc.network})</sup></button>
    <button>jobs <sup>({netc.jobs>=100?"99+":netc.jobs})</sup></button>
    <button>Notification <sup>({netc.notification>=100?"99+":netc.notification})</sup></button>
    <button>Messaging <sup>({netc.messaging>=100?"99+":netc.messaging})</sup></button>

    <button>Me <sup>{tnn}</sup></button>   
    </>
    
  );

}





export default App
