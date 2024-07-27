
import { CountContext } from './context'
import './App.css'
import { isRecoilValue, RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
import { STATES } from 'mongoose'


// Recoilroot=it is use to warap the things inside app Component
// atom=it is a separate file that is act as teleporter 
// useRecoilState= it is similar to useState
// useRecoilValue=it is use to have one value or [count => this part in use STATES]
// usesetRecoilState=Returns a tuple where the first element is the value of state and the second element is a setter function that will update the value
// [state,setstate]=for both of them  use recoilstate for just first one use recoilvalue for just second onr use recoilvalue

function App() {
  return (
    
    <div>     
      <RecoilRoot>
        <Count/>  
      </RecoilRoot>    
    </div>
  )
}

function Count(){
  console.log("re-render");
  return <div>
    <CountRender/>
    <Buttons/>
  </div>
}

function CountRender(){
  const count=useRecoilValue(countAtom);
  return <div>
    {count}
  <EvenCountRender/>
  </div>
}



function EvenCountRender(){
  const isEven=useRecoilValue(evenSelector);
  return <div>
    {(isEven)?"it is even":null}
  </div>
}





function Buttons({}){
  const [count,setCount]=useRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>

  </div>
}

export default App










// withouth using recoil by using context api
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <CountContext.Provider value={count}>
//         <Count setCount={setCount}/>
//       </CountContext.Provider>
//     </div>
//   )
// }


// function Count({setCount}){
//   return <div>
//     <CountRender/>
//     <Buttons setCount={setCount}/>
//   </div>
// }


// function CountRender(){
//   const count=useContext(CountContext);
//   return <div>
//     {count}
//   </div>
// }




// function Buttons({setCount}){
//   const count=useContext(CountContext);
//   return <div>
//     <button onClick={() => {
//       setCount(count+1)
//     }}>Increase</button>

//     <button onClick={()=>{
//       setCount(count-1)
//     }}>Decrease</button>

//   </div>
// }




// export default App
