import React from 'react'
import { useState } from 'react';

export const UserDetails = () => {

    const [details, setdetails] = useState({
        id: "",
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        phone: ""
    });

    const [detailsArr, setdetailsArr] = useState([]);

    const { id, firstName, lastName, dob, email, phone } = details;

    const handleChange = (e) => {
        let newDetails = { ...details }
        newDetails[e.target.name] = e.target.value;
        setdetails(newDetails)

    }

    const addUser = () => {
        let newDetailsArr = [...detailsArr]
        newDetailsArr.push(details);
        setdetailsArr(newDetailsArr);
        clearform();

    };

    const clearform = () => {
        setdetails({
            id: "",
            firstName: "",
            lastName: "",
            dob: "",
            email: "",
            phone: ""
        })
    }

    const updateUser = () => {
        let newDetailsArr = [...detailsArr];
        newDetailsArr[index] = details;
        setdetailsArr(newDetailsArr);
        clearform();

    };

    const deleteUser = (id) => {
        let newDetailsArr = detailsArr.filter((a) => a.id !== id);
        setdetailsArr(newDetailsArr);
    };

    const [index, setindex] = useState(0);

    const editUser = (mydetails, i) => {
        setdetails(mydetails);
        setindex(i)
    };



    return (
        <div>
            <form>

                <label htmlFor="">Id :</label>
                <input type="text" name="id" value={id} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="">First Name :</label>
                <input type="text" name="firstName" value={firstName} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="">Last Name :</label>
                <input type="text" name="lastName" value={lastName} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="">Date Of Birth :</label>
                <input type="text" name="dob" value={dob} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="">Email ID :</label>
                <input type="text" name="email" value={email} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="">Mobile Number :</label>
                <input type="text" name="phone" value={phone} onChange={(e) => { handleChange(e) }} /> <br />

                <button type="button" onClick={addUser}>Add Details</button>
                <button type="button" onClick={updateUser}>Update Details</button>
            </form>

            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date Of Birth</th>
                        <th>Email Id</th>
                        <th>Mobile Number</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {detailsArr.map((details, i) => {
                        return <tr key={i}>
                            <td>{details.id}</td>
                            <td>{details.firstName}</td>
                            <td>{details.lastName}</td>
                            <td>{details.dob}</td>
                            <td>{details.email}</td>
                            <td>{details.phone}</td>
                            <td><button onClick={() => { editUser(details,i) }} className='btn btn-warning'>Edit</button></td>
                            <td><button onClick={() => { deleteUser(details.id) }} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

