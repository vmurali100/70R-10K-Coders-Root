import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

export const Item = () => {
    const [item, setitem] = useState({
        name:"",
        username:"",
        email:"",
        password:"",
        conpassword:"",
        message:""
    });

    let url="http://localhost:3000/item/"

    const [itemArr, setitemArr] = useState([]);

    useEffect(()=>{getDataFromServer()},[])

    const handleChange=(e)=>{
        let newItem = {...item};
        newItem[e.target.name] = e.target.value;
        setitem(newItem);
    }

    const addItem=()=>{
        axios.post(url,item).then(()=>{
            console.log("user added successfully");
            clearform();
            getDataFromServer();
        })
    }

    const getDataFromServer=()=>{
        axios.get(url).then((res)=>{
            console.log(res.data);
            setitemArr(res.data);
       })
    }

    const clearform=()=>{
        setitem({
            name:"",
            username:"",
            email:"",
            password:"",
            conpassword:"",
            message:""
        })
    }

    const editItem=(itm)=>{
        setitem(itm)

    }

    const deleteItem=(itm)=>{
        axios.delete(url+itm.id).then(()=>{
            console.log("user deleted successfully");
            getDataFromServer();
        })

    }

    const updateItem=()=>{
        axios.put(url+item.id,item).then(()=>{
            console.log("user updated successfully");
            getDataFromServer();
            clearform();
        })

    }


  return (
    <div>
        <form>
            <label htmlFor="name">Name</label> <br/>
            <input type="text" name="name" value={item.name} onChange={(e)=>{handleChange(e)}}/> <br />

            <label htmlFor="username">Username</label> <br/>
            <input type="text" name="username" value={item.username} onChange={(e)=>{handleChange(e)}}/> <br />

            <label htmlFor="email">Email</label> <br/>
            <input type="text" name="email" value={item.email} onChange={(e)=>{handleChange(e)}}/> <br />

            <label htmlFor="password">Password</label> <br/>
            <input type="text" name="password" value={item.password} onChange={(e)=>{handleChange(e)}}/> <br />

            <label htmlFor="conpassword">Confirm Password</label> <br/>
            <input type="text" name="conpassword" value={item.conpassword} onChange={(e)=>{handleChange(e)}}/> <br />

            <label htmlFor="message">Message</label> <br/>
            <textarea type="text" name="message" value={item.message} onChange={(e)=>{handleChange(e)}}></textarea> <br />


            <button type="button" onClick={addItem}>Add Item</button>
            <button type="button" onClick={updateItem}>Update Item</button>
        </form>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                    <th>Message</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {itemArr.map((itm,i)=>{
                    return <tr key={i}>
                        <td>{itm.name}</td>
                        <td>{itm.username}</td>
                        <td>{itm.email}</td>
                        <td>{itm.password}</td>
                        <td>{itm.conpassword}</td>
                        <td>{itm.message}</td>
                        <td><button type="button" className="btn btn-warning" onClick={()=>{editItem(itm)}}>Edit</button></td>
                        <td><button type="button" className="btn btn-danger" onClick={()=>{deleteItem(itm)}}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}


