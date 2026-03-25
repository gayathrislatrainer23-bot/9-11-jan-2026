import { useEffect, useState } from "react"

const Effect = (age)=>{
    const [msg, setMsg] = useState('hi')
    const [count, setCount] = useState(2)
    // case 1
//     useEffect(()=>{
//  console.log('run  every render')
//     })

    // case:2
    // useEffect(()=>{
    //     console.log('initial render oinly')
    // },[])
// case: 3
useEffect(()=>{
     console.log(' only message change')
    // api callfun()
},[msg])

    return(
        <div className="">
<p>hello EFFECT</p>
<button onClick={()=> setMsg('msg changed')} >click</button>
<button onClick={()=> setCount(count+2)} >+2</button>
<input type="text" value={msg}  onChange={(e)=>setMsg(e.target.value)} />
{msg}
<p>{count}</p>
        </div>
    )
}
export default Effect;