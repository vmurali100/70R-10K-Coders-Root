import React,{useState} from 'react'
import TodosData from './data.json'


export const TodosTable = () => {
    const [todos, settodos] = useState(TodosData)

    const deletetodo =(university)=>{
        let newTodos=todos.filter((todo)=>todo.university !=university);
      settodos(newTodos)
    }
  return (
    <div className="container">
      <table class="table table-dark table-hover">
 
        <thead>
          <tr>
            <th >University</th>
            <th >Institute</th>
            <th > Branch</th>
            <th> Degree</th>
            <th>Experience</th>
            <th >Yourwebsiteorblog</th>
            <th> Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {todos.map((todo,i)=>{
                return <tr key={i}>
                    <td>{todo.university}</td>
                    <td>{todo.institute}</td>
                    <td>{todo.branch}</td>
                    <td>{todo.degree}</td>
                    <td>{todo.experience}</td>
                    <td>{todo.yourwebsiteorblog}</td>
                    <td><button type='text' className='btn btn-warning'>Edit</button></td>
                    <td><button type='text' className='btn btn-danger' onClick={()=>{deletetodo(todo.university)}}>Delete</button></td>

                </tr>
            })}
        </tbody>
        </table>

    </div>
  )
}
