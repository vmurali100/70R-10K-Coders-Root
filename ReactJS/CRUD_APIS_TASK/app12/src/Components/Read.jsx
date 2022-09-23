
import React, { useEffect,useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export const Read = () => {
    const [cart, setcart] = useState([])

    let url= "http://localhost:4013/calenders/"
    const navigate =useNavigate();


    useEffect(()=>{
        axios.get(url).then((res)=>{
            localStorage.setItem("carts", JSON.stringify(res.data))
            setcart(res.data)
        })
    },[])
    const addStudent =()=>{
        navigate("/create")
    }
  return (
    <div className='container'>

        <table class="table table-dark table-striped">

            <thead>
                <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>EmailAddress</th>
                <th>Dateofbirth</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((KP,i)=>{
                    return <tr key = {i}>
                <td>{KP.id}</td>
                <td>{KP.username}</td>
                <td>{KP.password}</td>
                <td>{KP.emailaddress}</td>
                <td>{KP.dateofbirth}</td>
                <td>{KP.height}</td>
                <td>{KP.weight}</td>
                        
                        <td>
                        <Link to={`/details/${KP.id}`} className="btn btn-success">Details</Link>

                        </td>

                        <td>
                        <Link to={`/edit/${KP.id}`} className="btn btn-warning">Edit</Link>
                        </td>

                        <td>

                        <Link to={`/delete/${KP.id}`} className="btn btn-danger">Delete</Link>

                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}


