import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const TodoDetails = () => {
    const objUrl = useParams()
    const [todoInfo, settodoInfo] = useState({})
    useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem("todos"));
        const res = todos.find((todo)=> todo.id == objUrl.id)
        settodoInfo(res)
    },[])
  return (
    <div className='container'>
            {Object.keys(todoInfo).length > 0 && <div className="card">

                <div className="card-body">
                    <h5 className="card-title">
                        {todoInfo.id}
                    </h5>
                    
                    <p className="card-text">
                        {todoInfo.title}
                    </p>
                    
                    <p className="card-text">
                        {todoInfo.completed}
                    </p>
                  

                    <Link to="/" className='btn btn-primary'>Go back to todos</Link>

                </div>

            </div>}
        </div>
  )
}
