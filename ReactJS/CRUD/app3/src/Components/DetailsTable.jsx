import React, { useState } from 'react'
import UsersData from './data.json'
export const DetailsTable = () => {
    const [details, setdetails] = useState(UsersData)
    console.log(UsersData);

    const deleteOne = (id) => {
        let newDetails = details.filter((One) => One.id !== id);
        setdetails(newDetails)
    }
    return (
        <div className='container'>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th >Street</th>
                        <th >City</th>
                        <th >state</th>
                        <th >Zip</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((One, i) => {
                        return <tr key={i}>
                            <td>{One.street}</td>
                            <td>{One.city}</td>
                            <td>{One.state}</td>
                            <td>{One.zip}</td>
                            <td><button className="btn btn-warning">Edit</button></td>
                            <td><button className="btn btn-danger" onClick={() => (deleteOne(One.id))}>Delete</button></td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
