
import React,{useEffect, useState} from 'react'
import axios from 'axios'

export const Page = () => {
  const [page, setpage] = useState({
      name:"",
      username:"",
      email:"",
      password:"",
      confirmpassword:"",
      message:""
  })
    
    const [pages,setpages] = useState([])

    useEffect(()=>{
        getDataFromServer()
    },[])

    let url="http://localhost:3000/validations/"

    const getDataFromServer=()=>{
        axios.get(url).then((response)=>{
            console.log(response)
            setpages(response.data)
        })
    }


    const handleChange=(e)=>{
        let newPage ={...page}
        newPage[e.target.name]=e.target.value 
        setpage(newPage)
    }

    const addUser =()=>{
        axios.post(url,page).then(()=>{
        console.log("page added Successfully")
        clearForm();
        getDataFromServer()
        })
    }
    const clearForm=()=>{
        setpage({
            name:"",
            username:"",
            email:"",
            password:"",
            confirmpassword:"",
            message:""
      
        })
    }
    const handleDelete=(val)=>{
        axios.delete(url+val.id).then(()=>{
            console.log("page deleted Successfully");
            getDataFromServer();
        })
    }
    const editpage=(val)=>{
        setpage(val)
    }
    const updatePage=()=>{
        axios.put(url+page.id,page).then(()=>{
            console.log("updated");
            getDataFromServer();
            clearForm()
        })
    }
    return (
    <div>
        <form>
        <label htmlFor='name'>Name: </label>
        <input type="text" name='name' value={page.name} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='username'>Username: </label>
        <input type="text" name='username' value={page.username} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='email'>Email: </label>
        <input type="text" name='email' value={page.email} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='password'>Password: </label>
        <input type="text" name='password' value={page.password} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='confirmpassword'>Confirmpassword: </label>
        <input type="text" name='confirmpassword' value={page.confirmpassword} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='message'>Message: </label>
        <input type="text" name='message' value={page.message} onChange={((e)=>{handleChange(e)})}/><br/>

        <button type ="button" onClick={addUser}>Add page</button>
        <button type ="button" onClick={updatePage}>Update page</button>

        <hr />
        <table border={2} class="table table-dark table-striped-columns">

            <thead>
                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>password</th>
                    <th>confirmpassword</th>
                    <th>message</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {pages.map((val,i)=>{
                    return <tr key={i}>
                        <td>{val.name}</td>
                        <td>{val.username}</td>
                        <td>{val.email}</td>
                        <td>{val.password}</td>
                        <td>{val.confirmpassword}</td>
                        <td>{val.message}</td>
                        <td>
                            <button type="button" className='btn btn-warning' onClick={()=>{editpage(val)}}>Edit</button>
                        </td>
                        <td><button type="button" className='btn btn-danger' onClick={()=>{handleDelete(val)}}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
        </form>
    </div>
  )
}

