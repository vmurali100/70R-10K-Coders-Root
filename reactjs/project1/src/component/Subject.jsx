import React,{useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export const Subject = () => {
    const [subject, setsubject] = useState([])
    let url = " http://localhost:3000/subject"
    axios.get(url).then(res => {
        console.log(res.data)
        setsubject(res.data)
    })

    useEffect(() => {

    }, [])
    return (
        <div>
           <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">subject</th>
      
    </tr>
  </thead>
  <tbody>
  </tbody>
  {subject.map((subject,i)=><tr key={i} >
    <td>{subject.id}</td>
    <td>{subject.subject}</td>
   
  </tr>

)}
</table>
    </div>
    )
}

