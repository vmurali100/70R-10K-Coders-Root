import React,{useState} from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';


function FormwithFuncComp() {
    let url="http://localhost:3201/students";
    const [std, setstd] = useState({
        id:"",
        sname:"",
        username:"",
        address:{
            suite:"",
            street:"",
        },
        geo:{
            lat:"",
            lng:"",
        }
    })
    const [students, setstudents] = useState([]);

    const objurl= useParams();

    useEffect(()=>{ getDataFormServer()
    },[])

    const handleChange=(e)=>{
        let stdnew={...std};
        stdnew[e.target.name]=e.target.value;
        setstd(stdnew);
    }


    const getDataFormServer=()=>{
        axios.get(url).then((res)=>{
            setstudents(res.data);
            console.log(students);  
            localStorage.setItem("PracStudents", JSON.stringify(res.data))
                     
            
        })
    }
  return (
    <div className='container'>
        <h2>PracticeForm</h2>
        <form action="">
            <label htmlFor="id">Id:
                <input type="text" name="id" id="" value={std.id} onChange={((e)=>{handleChange(e)})}/><br />
            </label>
            <label htmlFor="sname">StudentName:
                <input type="text" name="sname" id="" value={std.sname} onChange={((e)=>{handleChange(e)})} /><br />
            </label>
            <label htmlFor="username">Username:
                <input type="text" name="username" id="" value={std.username} onChange={((e)=>{handleChange(e)})}/><br />
            </label>
            <label htmlFor="">Address:
                <input type="text" name="suite" id="" placeholder='Suite' value={std.address.suite} onChange={((e)=>{handleChange(e)})}/><br />
                <input type="text" name="street" id="" placeholder='Street' value={std.address.street} onChange={((e)=>{handleChange(e)})} />
            </label>
        </form>
    </div>
  )
}

export default FormwithFuncComp