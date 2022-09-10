import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const Subjects = () => {
    const [subject, setsubject] = useState({
        subcode : "",
        subname : ""
    });

    let url = " http://localhost:3000/subjects";

    const [subarr, setsubarr] = useState([]);

    useEffect(()=>{
        getDataFromServer()
    },[])

    const handleChange=(e)=>{
         let newSubject = {...subject}
         newSubject[e.target.name] = e.target.value;
         setsubject(newSubject);
    }

    const getDataFromServer=()=>{
        axios.get(url).then((response)=>{
            setsubarr(response.data)
        })
    };

    const addSubject=()=>{
        axios.post(url,subject).then(()=>{
            clearform();
            getDataFromServer()
            document.getElementById("one").style.display="none";
        })
    }
 
    const clearform=()=>{
        setsubject({
            subcode : "",
            subname : ""
        })
    }

    const displayform=()=>{
           document.getElementById("one").style.display="block";
    }

  


  return (
    <div className='container'>

        <button onClick={displayform} type="button" className='btn btn-primary'>Click to display form to add Data</button> <br />

        <button  onClick={addSubject} type="button" className='btn btn-primary'>Add Subject</button>
        
        <form id="one">
            <label htmlFor="subcode">Subject Code : </label>
            <input type="text" name="subcode" value={subject.subcode} onChange={(e)=>{handleChange(e)}} /> <br/>

            <label htmlFor="subname">Subject Name : </label>
            <input type="text" name="subname" value={subject.subname} onChange={(e)=>{handleChange(e)}} /> <br/>
        </form>

        <table className='table'>
            <thead>
                <tr>
                    <th>SUB Code</th>
                    <th>SUB Name</th>
                </tr>
            </thead>
            <tbody>
                {subarr.map((sub,i)=>{
                    return <tr key={i}>
                        <td>{sub.subcode}</td>
                        <td>{sub.subname}</td>
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}
