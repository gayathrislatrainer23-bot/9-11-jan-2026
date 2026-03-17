
const StudentsList = ()=>{
    const students = ['Manu','Balu','Bob','Alice']
    // students[0]= 'moli'
return(
    <div className="">
        <ul>
        {
students.map((student,index)=>(
    <li key={index} >{student}</li>
))
        }

 
        </ul>
    </div>
)
}

export default StudentsList;
// key={index}