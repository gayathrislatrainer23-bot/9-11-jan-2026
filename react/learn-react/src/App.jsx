
import './App.css'
import Counter from './components/Counter'
 import Greetings from './components/Greetings'
import IsLoggedin from './components/IsLoggin'
import StudentsList from './components/StudentsList'
import WeatherApp from './components/WeatherApp'
// import {Greetings} from './components/Greetings'
import SimpleForm from './components/SimpleForm'

function App() {
let name = 'Raju'
const age = 34
let arr = ['Manu','Raju', 'Sonu']
const obj ={
  msg : "this is an object",
  status: " success",
  isLoggedIn : true
}
let isLoggedin = false;
  return (
    <>
  
<div className="" style={{color: "#fff"}} >
{/* <Greetings userName = {name}  age= {age} students = {arr} res= {obj}/> */}
{/* <IsLoggedin isLoggedin = {isLoggedin}/> */}
{/* <WeatherApp/> */}
{/* <StudentsList/> */}
{/* <Counter/> */}
<SimpleForm/>
</div>
    </>


  )
}

export default App
