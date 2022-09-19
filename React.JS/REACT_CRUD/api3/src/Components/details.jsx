import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


export const Details = () => {
    const [details, setdetails] = useState({
        firstname: "",
        lastname: "",
        dob: "",
        email: "",
        phone: ""
    })

    let url = "http://localhost:3000/details/"

    const [detailsArr, setdetailsArr] = useState([]);

    useEffect(()=>{
        getDataFromServer()},[]
    );

    const handleChange=(e)=>{
         let newDetails = {...details};
         newDetails[e.target.name] = e.target.value;
         setdetails(newDetails)
    }

    const getDataFromServer=()=>{
        axios.get(url).then((res)=>{
            console.log(res.data);
            setdetailsArr(res.data);
        })
    }

    const addDetails=()=>{
        axios.post(url,details).then(()=>{
            console.log("Detail added successfully");
            clearform();
            getDataFromServer();
        })
    }

    const clearform=()=>{
        setdetails({
            firstname: "",
        lastname: "",
        dob: "",
        email: "",
        phone: ""
        })
    }

    const deleteDetails=(det)=>{
        axios.delete(url+det.id).then(()=>{
            console.log("Details deleted successfully");
            getDataFromServer();
        })
    }

    const editDetails=(det)=>{
        setdetails(det);
    }

    const updateDetails=()=>{
          axios.put(url+details.id,details).then(()=>{
            console.log("Details updated successfully");
            getDataFromServer();
            clearform()
          })
    }




    return (
        <div>
            <form>
                <label htmlFor="firstname">First Name :</label>
                <input type="text" name="firstname" value={details.firstname} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="lastname">Last Name :</label>
                <input type="text" name="lastname" value={details.lastname} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="dob"> Date Of Birth :</label>
                <input type="text" name="dob" value={details.dob} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="firstname">Email :</label>
                <input type="text" name="email" value={details.email} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="phone">Mobile Number :</label>
                <input type="text" name="phone" value={details.phone} onChange={(e) => { handleChange(e) }} /> <br />

                <button type="button" onClick={addDetails}>Add Detail</button>

                <button type="button" onClick={updateDetails}>Update Detail</button>

            </form>

            <table className='table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Email ID</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {detailsArr.map((det,i)=>{
                          return <tr key={i}>
                            <td>{det.firstname}</td>
                            <td>{det.lastname}</td>
                            <td>{det.dob}</td>
                            <td>{det.email}</td>
                            <td>{det.phone}</td>
                            <td><button type="button" onClick={()=>{editDetails(det)}} className="btn btn-warning">Edit Detail</button></td>
                            <td><button type="button" onClick={()=>{deleteDetails(det)}} className="btn btn-danger">Delete Detail</button></td>

                          </tr>
                    })}

                </tbody>
            </table>

        </div>
    )
}
