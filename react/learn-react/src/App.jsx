
import './App.css'
import Counter from './components/Counter'
 import Greetings from './components/Greetings'
import IsLoggedin from './components/IsLoggin'
import StudentsList from './components/StudentsList'
import WeatherApp from './components/WeatherApp'
// import {Greetings} from './components/Greetings'
import SimpleForm from './components/SimpleForm'
import Profile from './components/Profile'
import Effect from './components/Effect'
import Login from './pages/Login'
import ProfilePage from './pages/ProfilePage'
import {BrowserRouter,Link,Route, Routes} from 'react-router-dom'
import DashBoard from './pages/DashBoard'

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
{/* <SimpleForm/> */}
{/* <Profile/>
<Effect age={age}/> */}
{/* <Login/>
<ProfilePage/> */}

<BrowserRouter>
<nav>
  <Link to={'/'}>DashBoard</Link>
  <button>

  <Link to={'/login'}>Login</Link>
  </button>
</nav>

<Routes>
  <Route path='/' element={<DashBoard/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/profile' element={<ProfilePage/>}/>
</Routes>
</BrowserRouter>
</div>
    </>


  )
}

export default App
