import sun from '../assets/sun.jpg'
const WeatherDisplay = ({temp, msg})=>{

    return(
        <div className="">
{
    temp >=30 ?  
    <>
    <p>hot</p> 
    <img src={sun}/>
    </>
    : <p>cold</p>

}

{
msg  && <p>{msg}</p>
}

        </div>
    )
}

export default WeatherDisplay