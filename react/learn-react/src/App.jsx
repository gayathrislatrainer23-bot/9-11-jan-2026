
import './App.css'
 import Greetings from './components/Greetings'
// import {Greetings} from './components/Greetings'

function App() {
let name = 'Raju'
const age = 34
let arr = ['Manu','Raju', 'Sonu']
const obj ={
  msg : "this is an object",
  status: " success",
  isLoggedIn : true
}
  return (
    <>
<div className="" style={{color: "#fff"}} >
<Greetings userName = {name}  age= {age} students = {arr} res= {obj}/>
</div>
    </>


  )
}

export default App
