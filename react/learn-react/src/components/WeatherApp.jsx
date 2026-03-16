import WeatherDisplay from "./WeatherDisplay"

const WeatherApp = ()=>{
    let temp = 26;
    let msg = " this is for checking"
    // let msg = undefined
    

    return(
        <div className="" style={{fontSize:50}}>
<WeatherDisplay temp={temp} msg= { msg}/>
        </div>
    )
}

export default WeatherApp