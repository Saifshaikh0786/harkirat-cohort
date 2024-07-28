import { useState } from "react"



function app(){
    return <div>
    <CardWrapper>
      <CardWrapper>
        hi there
      </CardWrapper>
    </CardWrapper><br></br>
    <CardWrapper>
        hello there 
    </CardWrapper>
    </div>
}


function CardWrapper({children}){
    return <div style={{border:"10px solid black",padding:20}}>
        {children}
    </div>

}


export default app