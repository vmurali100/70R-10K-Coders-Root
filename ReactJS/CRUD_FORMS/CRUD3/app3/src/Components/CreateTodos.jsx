import React,{useState} from 'react'

export const CreateTodos = () => {
    const [todo, settodo] = useState({"university":"","institute":"","branch":"","degree":"","experience":"","yourwebsiteorblog":""})
    const [todos, settodos] = useState([])
    const [index, setindex] = useState(0)
    const handleChange=(e)=>{
        let newTodo ={...todo};
        newTodo[e.target.name]= e.target.value;
        settodo(newTodo)
    };
    const handleSubmit=()=>{
        console.log(todo)
        let newTodos=[...todos]
        newTodos.push(todo)
        settodos(newTodos)
        ClearForm()
    };
    const ClearForm=()=>{
        settodo({"university":"","institute":"","branch":"","degree":"","experience":"","yourwebsiteorblog":""} )

    }
    const deletetodo=(university)=>{
        let newTodos=todos.filter((myTodo)=>myTodo.university !=university);
    settodos(newTodos)
    }
    const handleEdit=(myTodo,i)=>{
        settodo(myTodo);
        setindex(i)

    }

    const handleUpdate=()=>{
        let newTodos =[...todos];
        newTodos[index]=todo;
        settodos(newTodos)
        ClearForm();
    }



    const{university,institute,branch,degree,experience,yourwebsiteorblog}=todo;
  return (
    <div>
        <h2>REGISTRATION DETAILS</h2>
       <form>
           <label htmlFor=''>University :</label>
           <input type="text" name="university" value={university} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="">Institute :</label>
           <input type="text" name="institute"value={institute} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Branch :</label>
           <input type="text" name="branch"value={branch} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Degree :</label>
           <input type="text" name="degree"value={degree} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Experience :</label>
           <input type="text" name="experience"value={experience} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Your Website Or Blog :</label>
           <input type="text" name="yourwebsiteorblog"value={yourwebsiteorblog} onChange={(e)=>{handleChange(e)}}/><br/> 

           <button onClick={handleSubmit} type="button">SUBMIT</button>
           <button onClick={handleUpdate} type="button">Update User</button>


           </form>
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
             <td><button type='text' className='btn btn-warning'onClick={()=>{handleEdit(todo,i)}} >Edit</button></td>
             <td><button type='text' className='btn btn-danger' onClick={()=>{deletetodo(todo.university)}}>Delete</button></td>

         </tr>
     })}
 </tbody>
 </table>

           </div>
  )
}
