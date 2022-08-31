import { ChildDetail } from "./ChildDetail"

export function Detail(){
    const [welcomemsg,setWelcomemsg] =useState("Hello from Details")
    const [list,setList]=useState({fname:"Brett",lname:"Rathod", email:"brett@gmail.com",state:"Andaman"})
    // const [data,setData]=useState(["Roy","Jaswal","ramesh"])
    const handleChange=()=>{
        setWelcomemsg("I am going to change by setWelcomemsg")
       }
       const changeList=()=>{
        setList({fname:"Manasa",lname:"Ramya", email:"ram@gmail.com", state:"Victoria"})
       }
    //    const changeData=()=>{
    //     setData(["Mahi","Jay","Ramu"])
    //    }
    
       return <div>
       <h2>Hello From Functional Component</h2>
       <ChildDetail welcomemsg={welcomemsg} handleChange={handleChange}/>
       <button onClick={handleChange}>Change Content</button>
       <p>Content : {welcomemsg}</p>

       <button onClick={changeList}>Change List</button>
       <ul>
           <li>{list.fname}</li>
           <li>{list.lname}</li>
           <li>{list.email}</li>
           <li>{list.state}</li>
       </ul>

       {/* <button onClick={changeData}>Change Users</button>
       <ul>
           {Data.map((data,i)=>{
               return <li key={i}>{data}</li>
           })}
       </ul> */}
   </div>
}