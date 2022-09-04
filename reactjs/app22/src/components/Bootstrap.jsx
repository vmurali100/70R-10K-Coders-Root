import React, { useState } from 'react'

export const Bootstrap = () => {
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    message: "",
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
    clearform()
  }

  

  const handledit = (myuser, i) => {
    setuser(myuser)
    setindex(i)
  }

  const handledelete = (name) => {
    let newusers = users.filter((myuser) => myuser.name !== name)
    setusers(newusers)
  }

  const clearform = () => {
    setuser({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      message: "",
    })
  }
  
  const updateuser = () => {
    let newusers = [...users]
    newusers[index] = user;
    setusers(newusers)
    clearform()
  }
  const { name, username, email, password, confirmpassword, message } = user
  return (
    <div>
      <p><h1>BOOTSTRAP 4 FORM VALIDATION DEMO</h1></p>
      <form>
        <label htmlFor="name">name</label>
        <input type="text" name='name' value={name} onChange={(e) => { handlechange(e) }} /><br />

        <label htmlFor="username">username</label>
        <input type="text" name="username" value={username} onChange={(e) => { handlechange(e) }} /><br />

        <label htmlFor="email">email</label>
        <input type="text" name="email" value={email} onChange={(e) => { handlechange(e) }} /><br />

        <label htmlFor="password">password</label>
        <input type="text" name="password" value={password} onChange={(e) => { handlechange(e) }} /><br />

        <label htmlFor="confirmpassword">confirmpassword</label>
        <input type="text" name="confirmpassword" value={confirmpassword} onChange={(e) => { handlechange(e) }} /><br />

        <label htmlFor="message">message</label>
        <input type="text" name="message" value={message} onChange={(e) => { handlechange(e) }} /><br />

        <button type='button' onClick={handlesubmit}>SUBMIT</button>
       
        <button type='button' onClick={updateuser}>update user</button>
      </form>
      <table class="table">
        <thead>
          <tr>
            <th >name</th>
            <th >username</th>
            <th >email</th>
            <th >password</th>
            <th >confirmpassword</th>
            <th>message</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return <tr key={i}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.confirmpassword}</td>
              <td>{user.message}</td>
              <td> <button className='btn btn-warning' onClick={() => { handledit(user, i) }} >EDIT</button> </td>
              <td>  <button className='btn btn-danger' onClick={() => { handledelete(user.name) }}>DELETE</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
