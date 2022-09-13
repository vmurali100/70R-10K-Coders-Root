import React,{useState} from 'react'

export const DropDowns = () => {
    const [subjects, setsubjects] = useState(["HTML","CSS","JS","ReactJS"])
  return (
    <div>
        <select name="" id="">
            {subjects.map((sub)=> <option value={sub}>{sub}</option>)}
        </select>
    </div>
  )
}
