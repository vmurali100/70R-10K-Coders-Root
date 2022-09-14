import React,{useEffect,useState} from 'react'
import axios from "axios";
export const Subjects = () => {
    const [subjects, setsubjects] = useState([])
    useEffect(() => {
      let url=" http://localhost:3201/subjects"
      axios.get(url).then(res=>{
        console.log(res.data)
        setsubjects(res.data)
      })
    }, [])
  return (
    <div className='container'>
         <button className='btn btn-primary'>Add Subject</button>
        <table className="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>SubjectName</th>
      <th>Author</th>
      
    </tr>
  </thead>
  <tbody>
    {subjects.map((subject,i)=><tr key={i}>
    <td>{subject.id}</td>
        <td>{subject.subjectName}</td>
        <td>{subject.author}</td>
        
    </tr>
    )}
    <th></th>
  </tbody>
 
</table>
    </div>
  )
}
