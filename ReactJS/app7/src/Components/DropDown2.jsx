import React,{useState} from 'react'

export const DropDown2 = () => {
    const [subjects, setsubjects] = useState(["", "HTML","CSS","JS","ReactJS"]);
    const [selectedSubject, setselectedSubject] = useState("");

    const handleChange=(e)=>{
        setselectedSubject(e.target.value);
        console.log(e.target.value);
    }
  return (
    <div>
        <select name="" id="" value={selectedSubject} onChange={(e)=>{handleChange(e)}} placeholder="select subject" >
            {subjects.map((sub,i)=>(
                <option value={sub} key={i}> {sub} </option>
            ))}
        </select>
    </div>
  )
}
