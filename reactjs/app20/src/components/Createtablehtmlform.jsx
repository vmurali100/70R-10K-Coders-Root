import React,{useState} from 'react'
import usersdata from './data.json'
export const Createtablehtmlform = () => {
    const [users, setusers] = useState(usersdata)
    console.log(usersdata)

    const handledelete = (firstname) => {
        let newusers = users.filter((myuser) => myuser.firstname !== firstname)
        setusers(newusers)
    }

  return (
    <div>
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
                            <td> <button className='btn btn-warning'  >EDIT</button> </td>
                            <td>  <button className='btn btn-danger' onClick={() => { handledelete(user.firstname) }}>DELETE</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
    </div>
  )
}
