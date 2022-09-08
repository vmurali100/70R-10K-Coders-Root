import React,{useEffect, useState} from 'react'
import axios from 'axios'

export const Detail = () => {
    const [detail, setdetail] = useState({
        fname:"",
        lname:"",
        dofb:"",
        emailid:"",
        mobilenumber:""
    })
    const [details,setdetails] = useState([])

    useEffect(()=>{
        getDataFromServer()
    },[])

    let url="http://localhost:3000/details/"

    const getDataFromServer=()=>{
        axios.get(url).then((response)=>{
            console.log(response)
            setdetails(response.data)
        })
    }


    const handleChange=(e)=>{
        let newDetail ={...detail}
        newDetail[e.target.name]=e.target.value 
        setdetail(newDetail)
    }

    const addUser =()=>{
        axios.post(url,detail).then(()=>{
        console.log("Detail added Successfully")
        clearForm();
        getDataFromServer()
        })
    }
    const clearForm=()=>{
        setdetail({
        fname:"",
        lname:"",
        dofb:"",
        emailid:"",
        mobilenumber:""
        })
    }
    const handleDelete=(det)=>{
        axios.delete(url+det.id).then(()=>{
            console.log("User deleted Successfully");
            getDataFromServer();
        })
    }
    const editdetail=(det)=>{
        setdetail(det)
    }
    const updateDetail=()=>{
        axios.put(url+detail.id,detail).then(()=>{
            console.log("updated");
            getDataFromServer();
            clearForm()
        })
    }
    return (
    <div>
        <form>
        <label htmlFor='fname'>First Name: </label>
        <input type="text" name='fname' value={detail.fname} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='lname'>Last Name: </label>
        <input type="text" name='lname' value={detail.lname} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='dofb'>DofB: </label>
        <input type="text" name='dofb' value={detail.dofb} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='emailid'>EmailId: </label>
        <input type="text" name='emailid' value={detail.emailid} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='mobilenumber'>Mobile Number: </label>
        <input type="text" name='mobilenumber' value={detail.mobilenumber} onChange={((e)=>{handleChange(e)})}/><br/>
        <button type ="button" onClick={addUser}>Add User</button>
        <button type ="button" onClick={updateDetail}>Update User</button>

        <hr />
        <table border={2} class="table table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DofB</th>
                    <th>EmailId</th>
                    <th>Mobile Number</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {details.map((det,i)=>{
                    return <tr key={i}>
                        <td>{det.fname}</td>
                        <td>{det.lname}</td>
                        <td>{det.dofb}</td>
                        <td>{det.emailid}</td>
                        <td>{det.mobilenumber}</td>
                        <td>
                            <button type="button" onClick={()=>{editdetail(det)}}>Edit</button>
                        </td>
                        <td><button type="button" className='btn btn-danger' onClick={()=>{handleDelete(det)}}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
        </form>
    </div>
  )
}
