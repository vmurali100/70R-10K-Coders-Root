import React, { useState } from 'react'

export const Htmlform = () => {
    const [user, setuser] = useState({
        firstname: "",
        lastname: "",
        dateofbirth: "",
        emailid: "",
        mobilenumber: "",
    })

    const handlechange = (e) => {
        let newuser = { ...user }
        newuser[e.target.name] = e.target.value
        setuser(newuser)
    }

    const [users, setusers] = useState([])
    const [index, setindex] = useState()

    const handlesubmit = () => {
        console.log(user)
        let newusers = [...users]
        newusers.push(user)
        setusers(newusers)
    }

    const handlereset = () => {
        setuser({
            firstname: "",
            lastname: "",
            dateofbirth: "",
            emailid: "",
            mobilenumber: "",
        })
    }

    const handledit = (myuser, i) => {
        setuser(myuser)
        setindex(i)
    }

    const handledelete = (firstname) => {
        let newusers = users.filter((myuser) => myuser.firstname !== firstname)
        setusers(newusers)
    }

    const clearform=()=>{
        setuser({
            firstname: "",
            lastname: "",
            dateofbirth: "",
            emailid: "",
            mobilenumber: "",
        })
    }
    const updateuser=()=>{
        let newusers=[...users]
    newusers[index]=user;
    setusers(newusers)
    clearform()
    }
    const { firstname, lastname, dateofbirth, emailid, mobilenumber } = user

    return (
        <div>
            <p><h1>HTML FORM</h1></p>
            <form>
                <label htmlFor="firstname">firstname</label>
                <input type="text" name='firstname' value={firstname} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="lastname">lastname</label>
                <input type="text" name="lastname" value={lastname} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="dateofbirth">Date of birth</label>
                <input type="text" name="dateofbirth" value={dateofbirth} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="emailid">email id</label>
                <input type="text" name="emailid" value={emailid} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="mobilenumber">mobilenumber</label>
                <input type="text" name="mobilenumber" value={mobilenumber} onChange={(e) => { handlechange(e) }} /><br />

                <button type='button' onClick={handlesubmit}>SUBMIT</button>
                <button type='button' onClick={handlereset}>RESET</button>
                <button type='button' onClick={updateuser}>update user</button>
            </form>
            <table class="table">
                <thead>
                    <tr>
                        <th >firstname</th>
                        <th >lastname</th>
                        <th >dateofbirth</th>
                        <th >emailid</th>
                        <th >mobilenumber</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.dateofbirth}</td>
                            <td>{user.emailid}</td>
                            <td>{user.mobilenumber}</td>
                            <td> <button className='btn btn-warning' onClick={() => { handledit(user, i) }} >EDIT</button> </td>
                            <td>  <button className='btn btn-danger' onClick={() => { handledelete(user.firstname) }}>DELETE</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
