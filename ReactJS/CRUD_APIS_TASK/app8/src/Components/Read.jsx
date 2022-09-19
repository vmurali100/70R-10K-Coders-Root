import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export const Read = () => {
    let url="http://localhost:4009/todo/"
  const [todo, settodo] = useState([])
  useEffect(()=>{
    axios.get(url).then((res)=>{
        localStorage.setItem("Todos", JSON.stringify(res.data))
        settodo(res.data)
    })
})
  return (
    <div className='container'>

        <table class="table table-sujjess table-striped">

            <thead>
                <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todo.map((JJ,i)=>{
                    return <tr key = {i}>
                        
                        <td>{JJ.id}</td>
                        <td>{JJ.userId}</td>
                        <td>{JJ.title}</td>
                        <td>{JJ.completed}</td>

                        



                        <td>
                        <Link to={`/details/${JJ.id}`} className="btn btn-info">Details</Link>

                        </td>

                        <td>
                        <Link to={`/edit/${JJ.id}`} className="btn btn-warning">Edit</Link>
                        </td>

                        <td>

                        <Link to={`/delete/${JJ.id}`} className="btn btn-danger">Delete</Link>

                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}




