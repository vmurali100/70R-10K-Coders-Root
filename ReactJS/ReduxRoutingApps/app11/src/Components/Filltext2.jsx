import React,{useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Filltext2 = () => {
    const url="http://localhost:3202/Filltext2";
    const [perData, setperData] = useState([])
    useEffect(()=>{
        axios.get(url).then((res)=>{
            localStorage.setItem("Filltext2",JSON.stringify(res.data))
            setperData(res.data)
        })
    },[])
  return (
    <div>
        <table className='table table-border=2'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Fname</th>
                    <th>Lname</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {perData.map((per,i)=> <tr key={i}>
                    <td>{per.id}</td>
                    <td>{per.fname}</td>
                    <td>{per.lname}</td>
                    <td>{per.email}</td>
                    <td>
                        <Link to={`/edit/${per.id}`}><button type='button' className='btn btn-info'>Edit</button></Link>
                    </td>
                    <td>
                        <Link to={`/delete/${per.id}`}><button type='button' className='btn btn-danger'>Delete</button></Link>
                    </td>
                </tr>)}
            </tbody>
        </table>

    </div>
  )
}
