import React,{useState} from 'react'

export const CreateUser = () => {
    const [user, setuser] = useState({//created an object
        "id": "",
        "email": "",
        "username": "",
        "password": ""
    })
    // const [users, setusers] = useState([]);//created an empty array
    // const handleChange=()={};
    // const handleSubmit=()={};


  return (
    <div>
        <form >
            <label htmlFor="">ID</label>
            <input type="text" name='id'/><br/>
            <label htmlFor="">Email</label>
            <input type="text" name='email'/><br/>
            <label htmlFor="">Username</label>
            <input type="text" name='username'/><br/>
            <label htmlFor="">Password</label>
            <input type="text" name='password'/><br/>
        </form>
    </div>
  )
}
