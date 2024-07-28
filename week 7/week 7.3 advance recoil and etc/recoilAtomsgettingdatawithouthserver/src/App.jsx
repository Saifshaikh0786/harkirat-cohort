
import './App.css'
import { RecoilRoot, selector, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom , tn } from './atoms'


// whenever u are using recoil wrap it inside RecoilRoot inside the app component

function App() {
  return (
  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  )

}

function MainApp(){
  const network=useRecoilValue(networkAtom);
  const job=useRecoilValue(jobsAtom);
  const Notification=useRecoilValue(notificationAtom);
  const [message,setmessage]=useRecoilState(messagingAtom);
  const totalnot=useRecoilValue(tn)
  
  return (
    <>
    <button>Home</button>
    <button>My network <sup>({network >=100?"99+":network})</sup></button>
    <button>jobs <sup>({job>=100?"99+":job})</sup></button>
    <button>Notification <sup>({Notification>=100?"99+":Notification})</sup></button>
    <button>Messaging <sup>({message>=100?"99+":message})</sup></button>

    <button>Me <sup>{totalnot}</sup></button>

    <button onClick={()=>{
      setmessage(message+1);
    }}>click me </button>    
    </>
    
  )
}

export default App
