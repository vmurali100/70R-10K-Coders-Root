import React from 'react'
import { useState } from 'react';

export const CreateUser = () => {
    const [user, setuser] = useState({
        id:"",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: ""
    });

    const [users, setusers] = useState([])

    const { id,street, city, state, zip, country } = user;

    const handleChange = (e) => {
        let newUser = { ...user }
        newUser[e.target.name] = e.target.value;
        setuser(newUser)
    }

    const handleSubmit = () => {
        let newUsers = [...users]
        newUsers.push(user)
        setusers(newUsers)
        clearform()
    };

    const clearform = () => {
        setuser({
            id:"",
            street: "",
            city: "",
            state: "",
            zip: "",
            country: ""

        })
    };

    const [index, setindex] = useState(0);

    const deleteUser = (id) => {
        let newUsers = users.filter((myuser) =>  myuser.id !== id );
        setusers(newUsers)
    };

    const handleEdit=(myuser,i)=>{
          setuser(myuser);
          setindex(i);
    };

    const updateUser=()=>{
        let newUsers = [...users]
        newUsers[index] = user;
        setusers(newUsers);
        clearform();
    };








    return (
        <div>
            <form>
            <label htmlFor="">Id :</label>
                <input type="text" name="id" value={id} onChange={(e) => { handleChange(e) }} /> <br />
                
                <label htmlFor="">Street :</label>
                <input type="text" name="street" value={street} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="">City :</label>
                <input type="text" name="city" value={city} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="">State :</label>
                <input type="text" name="state" value={state} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="">Zip Code :</label>
                <input type="text" name="zip" value={zip} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="">Country :</label>
                <input type="text" name="country" value={country} onChange={(e) => { handleChange(e) }} /> <br />
                <button type="button" onClick={handleSubmit}>Add User</button>
                <button type="button" onClick={updateUser}>Update User</button>

            </form>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Country</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.street}</td>
                            <td>{user.city}</td>
                            <td>{user.state}</td>
                            <td>{user.zip}</td>
                            <td>{user.country}</td>
                            <td><button  onClick={()=>{handleEdit(user,i)}}className="btn btn-warning">Edit</button></td>
                            <td><button onClick={()=>{deleteUser(user.id)}} className="btn btn-danger">Delete</button></td>

                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    )

}