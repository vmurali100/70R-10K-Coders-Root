import React, { useState } from 'react'

export const Sample = () => {
    const [user, setuser] = useState({
        username: "",
        password: "",
        emailaddress: "",
        dob: "",
        heightweight: ""
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
            username: "",
            password: "",
            emailaddress: "",
            dob: "",
            heightweight: ""
        })
    }

    const handledit = (myuser, i) => {
        setuser(myuser)
        setindex(i)
    }

    const handledelete = (username) => {
        let newusers = users.filter((myuser) => myuser.username !== username)
        setusers(newusers)
    }

    const clearform = () => {
        setuser({
            username: "",
            password: "",
            emailaddress: "",
            dob: "",
            heightweight: ""
        })
    }
    const updateuser = () => {
        let newusers = [...users]
        newusers[index] = user;
        setusers(newusers)
        clearform()
    }
    const { username, password, emailaddress, dob, heightweight } = user
    return (
        <div>
            <p><h2>SAMPLE FORM</h2></p>
            <form>
                <label htmlFor="username">username</label>
                <input type="text" name='username' value={username} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="password">password</label>
                <input type="text" name="password" value={password} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="emailaddress">emailaddress</label>
                <input type="text" name="emailaddress" value={emailaddress} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="dob">dob</label>
                <input type="text" name="dob" value={dob} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="heightweight">heightweight</label>
                <input type="text" name="heightweight" value={heightweight} onChange={(e) => { handlechange(e) }} /><br />

                <button type='button' onClick={handlesubmit}>SUBMIT</button>
                <button type='button' onClick={handlereset}>RESET</button>
                <button type='button' onClick={updateuser}>update user</button>
            </form>
            <table class="table">
                <thead>
                    <tr>
                        <th >username</th>
                        <th >password</th>
                        <th >emailaddress</th>
                        <th >dob</th>
                        <th >heightweight</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.emailaddress}</td>
                            <td>{user.dob}</td>
                            <td>{user.heightweight}</td>
                            <td> <button className='btn btn-warning' onClick={() => { handledit(user, i) }} >EDIT</button> </td>
                            <td>  <button className='btn btn-danger' onClick={() => { handledelete(user.username) }}>DELETE</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
