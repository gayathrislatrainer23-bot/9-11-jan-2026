import { useState } from "react"

const SimpleForm =()=>{
const [name, setName] = useState('')
const handleSubmit = (e)=>{
    e.preventDefault()
    //  prevent refresh
alert(name)

}

    return(
        <div>
        <form onSubmit={handleSubmit}>
<input type="text" value={name}  onChange={(e)=> setName(e.target.value)}  placeholder="Enter your name"/>
{/* <input type="text"  placeholder="Enter your email"/> */}
{/* <input type="text"  placeholder="Enter your email"/> */}
    <button  type="submit">submit</button>
        </form>
        </div>
    )
}
export default SimpleForm;