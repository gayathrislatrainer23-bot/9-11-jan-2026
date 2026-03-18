import { useState } from "react";

function Counter (){
//const [currentState, setState]=useState(0)
const [count,setCount]= useState(0)
const handleDecrement = ()=>{
    if(count <= 0){
        setCount(0)
    }
    else{
        setCount(count-1)
    }
}

return (
 <div>
    <button onClick={()=>setCount(count+1)}>+</button>
       <h1>{count}</h1>
   <button onClick={handleDecrement}>-</button>
 </div>
)
}
export default Counter;