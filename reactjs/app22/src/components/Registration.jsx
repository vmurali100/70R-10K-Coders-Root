import React, { useState } from 'react'

export const Registration = () => {
    const [user, setuser] = useState({
        university: "",
        institute: "",
        branch: "",
        degree: "",
        averagecpi: "",
        experience: "",
        yourwebsite: ""
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
            university: "",
        institute: "",
        branch: "",
        degree: "",
        averagecpi: "",
        experience: "",
        yourwebsite: ""
        })
    }

    const handledit = (myuser, i) => {
        setuser(myuser)
        setindex(i)
    }

    const handledelete = (university) => {
        let newusers = users.filter((myuser) => myuser.university !== university)
        setusers(newusers)
    }

    const clearform=()=>{
        setuser({
            university: "",
        institute: "",
        branch: "",
        degree: "",
        averagecpi: "",
        experience: "",
        yourwebsite: ""
        })
    }
    const updateuser=()=>{
        let newusers=[...users]
    newusers[index]=user;
    setusers(newusers)
    clearform()
    }
    const {  university,institute,branch,degree, averagecpi, experience,  yourwebsite  } = user
    return (
        <div>
            <p><h1>REGISTRATION DETAILS</h1></p>
            <form>
                <label htmlFor="university">university</label>
                <input type="text" name='university' value={university} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="institute">institute</label>
                <input type="text" name="institute" value={institute} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="branch">branch</label>
                <input type="text" name="branch" value={branch} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="degree">degree</label>
                <input type="text" name="degree" value={degree} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="averagecpi">average cpi</label>
                <input type="text" name="averagecpi" value={averagecpi} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="experience">experience</label>
                <input type="text" name="experience" value={experience} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="yourwebsite">yourwebsite</label>
                <input type="text" name="yourwebsite" value={yourwebsite} onChange={(e) => { handlechange(e) }} /><br />

                <button type='button' onClick={handlesubmit}>SUBMIT</button>
                <button type='button' onClick={handlereset}>RESET</button>
                <button type='button' onClick={updateuser}>update user</button>
            </form>
            <table class="table">
                <thead>
                    <tr>
                        <th >university</th>
                        <th >institute</th>
                        <th >branch</th>
                        <th >degree</th>
                        <th >averagecpi</th>
                        <th >experience</th>
                        <th >yourwebsite</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.university}</td>
                            <td>{user.institute}</td>
                            <td>{user.branch}</td>
                            <td>{user.degree}</td>
                            <td>{user.averagecpi}</td>
                            <td>{user.experience}</td>
                            <td>{user.yourwebsite}</td>
                            <td> <button className='btn btn-warning' onClick={() => { handledit(user, i) }} >EDIT</button> </td>
                            <td>  <button className='btn btn-danger' onClick={() => { handledelete(user.university) }}>DELETE</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
