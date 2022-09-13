import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
export const Teachers = () => {
    const [teacher, setteacher] = useState([])
let url="http://localhost:3000/teacher"
axios.get(url).then(res => {
    console.log(res.data)
    setteacher(res.data)
})

    useEffect(()=>{

    },[])
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th >id</th>
      <th >sir</th>
    
    </tr>
  </thead>
  <tbody>
    
  </tbody>
  {teacher.map((teacher,i)=><tr key={i} >
    <td>{teacher.id}</td>
    <td>{teacher.sir}</td>
   
  </tr>

)}
</table>
    </div>
  )
}
