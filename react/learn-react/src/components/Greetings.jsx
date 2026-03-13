
const Greetings = ({userName,age,students,res})=>{
    // console.log('props:',props)
    // console.log('userName:', props.userName)
// userName ??
    return(
        <div className="">
  <p>haii  {userName} </p>
  <p>{age}</p>
  <p>{students}</p>
  <p>{res.msg}</p>
  <p>{res.status}</p>
  {/* <p>{res.isLoggedIn}</p> */}
        </div>
    )
}

export default Greetings;
