import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <button onClick={function(){
//         setCount(count+1);
//       }}>Count {count}</button>
//     </div>
    
//   )
// }

// export default App


// logic for getting factorial of a number 

// export function App(){
//    const[InputValue,setInputValue]=useState(0);

//   const expensiveValue=useMemo(() =>{
//     let value=1;
//     for(let i=1;i<=InputValue;i++){
//         value=value*i;
//       }
//       return value;
//   },[InputValue]);




//   return <div>
//     <input type="Number" onChange={(e) => setInputValue(e.target.value)}>
//     </input>
//     <p>
//       Calculated value {expensiveValue}
//     </p>
//   </div>
// }


// export default App

//logic for finding/filtering the ssentence from arandom list


const  words=["hi","my","name","is","for","to","random","words"];
const TOTAL_LINES=1000;
const ALL_WORDS=[];

for(let i=0;i<TOTAL_LINES;i++){
    let sentence="";
    for(let j=0;j<words.length;j++){
      sentence+=(words[Math.floor(words.length* Math.random())])
      sentence+=" "
    }
    ALL_WORDS.push(sentence);

};




export function App(){
    const[sentence,setSentence]=useState(ALL_WORDS);
    const[filter,setFilter]=useState("");


    const filterSenetence=sentence.filter(x => x.includes(filter))

    return <div>
    <input type="text" onChange={(e) => {
      setFilter(e.target.value);
    }}></input>

    {filterSenetence.map(word => <div>
      {word}
    </div>)}

    </div>
}

export default App;