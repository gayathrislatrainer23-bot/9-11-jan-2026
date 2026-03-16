function IsLoggedin ({isLoggedin}){
    return(
        <div className="">
{
    isLoggedin ? <h1> welcome Back</h1>      :   <h1> please LogIn</h1>
}
        </div>
    )
}

export default  IsLoggedin;