import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [todo, settodo] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    
    const todos =JSON.parse(localStorage.getItem("Todos"))
     const todo=todos.find((std)=>std.id==urlObj.id)//
     console.log(todos)
    settodo(todo)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(todo).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{todo.id}</h5>


          

          <p className="card-text">
          {todo.userId}
          </p>
          <p className="card-text">
          {todo.title}
          </p>
          <p className="card-text">
          {todo.completed}
          </p>


          
          
          <Link className="btn btn-primary" to ="/">Go To Todos</Link>
          <a href="a" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

