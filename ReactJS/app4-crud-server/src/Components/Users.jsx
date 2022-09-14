import React, { useEffect,useState } from 'react';
import axios from 'axios'

export const Users = () => {
    const [users, setusers] = useState([])
    // useEffect(()=>{
    //     let url = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
    //     axios.get(url).then((res)=>{
    //         console.log(res.data)
    //         // setusers(res.data)
    //     })
    // },[])
  return (
    <div>
        <h2>Users</h2>

        <ul>
            {users.map((user)=>{
                return <li key={user}>{user}</li>
            })}
        </ul>

    </div>
  )
}
