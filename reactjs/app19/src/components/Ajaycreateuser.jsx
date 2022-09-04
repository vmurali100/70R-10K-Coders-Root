import React, { useState } from 'react'

export const Ajaycreateuser = () => {
  const [user, setuser] = useState({

    fname: "",
    lname: "",
    tel: "",
    address: " ",
    city: "",
    state: "",
    zip: "",
  })
  const [users, setusers] = useState([])
  const [index, setindex] = useState()

  const handlechange = (e) => {
    let newuser = { ...user }
    newuser[e.target.name] = e.target.value;
    setuser(newuser)
  }

  const handlesubmit = () => {
    console.log(user)
    let newusers = [...users]
    newusers.push(user)
    setusers(newusers)
    clearform()
  }

  const clearform = () => {
    setuser({
      fname: "",
      lname: "",
      tel: "",
      address: " ",
      city: "",
      state: "",
      zip: "",
    })
  }
  const deleteuser = (fname) => {
    let newusers = users.filter((myuser) => myuser.fname !== fname)
    setusers(newusers)
  }

  const handledit = (myuser,i) => {
    setuser(myuser)
    setindex(i)
  }

  const updateuser=()=>{
    let newusers=[...users]
    newusers[index]=user;
    setusers(newusers)
    clearform()
  }
  const { fname, lname, tel, address, city, state, zip } = user;
  return (
    <div>
      <form>
        <label htmlFor="">fname</label>
        <input type="text" name="fname" value={fname} onChange={(e) => { handlechange(e) }} /><br />

        <label htmlFor="">lname</label>
        <input type="text" name="lname" value={lname} onChange={(e) => { handlechange(e) }} /><br />

        <label htmlFor="">tel</label>
        <input type="text" name="tel" value={tel} onChange={(e) => { handlechange(e) }} /><br />

        <label htmlFor="">address</label>
        <input type="text" name="address" value={address} onChange={(e) => { handlechange(e) }} /><br />

        <label htmlFor="">city</label>
        <input type="text" name="city" value={city} onChange={(e) => { handlechange(e) }} /><br />

        <label htmlFor="">state</label>
        <input type="text" name="state" value={state} onChange={(e) => { handlechange(e) }} /><br />

        <label htmlFor="">zip</label>
        <input type="text" name="zip" value={zip} onChange={(e) => { handlechange(e) }} /><br />

        <button type='button' onClick={handlesubmit}>add user</button>
        <button type='button' onClick={updateuser}>update user</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th >fname</th>
            <th >lname</th>
            <th >tel</th>
            <th >address</th>
            <th>city</th>
            <th>state</th>
            <th>zip</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody> 
          {users.map((user, i) => {
            return <tr key={i}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.tel}</td>
              <td>{user.address}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.zip}</td>
              <td><button className='btn btn-warning' onClick={() => { handledit(user,i) }}>EDIT</button></td>
              <td> <button className='btn btn-danger' onClick={() => { deleteuser(user.fname) }}>DELETE</button></td>
            </tr>
          })}
        </tbody>
      </table>

    </div>
  )
}
