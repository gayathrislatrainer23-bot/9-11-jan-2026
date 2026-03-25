import { useEffect, useState } from "react";

const Profile = ()=>{
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    useEffect(()=>{
console.log(' haii, i am here')
    })
    useEffect(()=>{
console.log('count side effect')
    },[count])
    useEffect(()=>{
 console.log('initial render')

    },[])


    return(
        <div className="">
       <h1>hii</h1>
       <button onClick={()=>setCount(count+1)}>+</button>
       <button onClick={()=>setCount2(count2+2)}>+2</button>
       <p>{count}</p> 
       <p>{count2}</p> 
        </div>
    )
}

 export default Profile;