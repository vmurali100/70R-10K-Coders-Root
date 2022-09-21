import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


export const Address = () => {
    const [address, setaddress] = useState({
        street: "",
        city: "",
        state: "",
        zip: "",
        country: ""
    });

    let url="http://localhost:3000/address/";

    useEffect(()=>{
        getDataFromServer()},
        []);

    const [addressess, setaddressess] = useState([]);


    

    const getDataFromServer=()=>{
        axios.get(url).then((response)=>{
            console.log(response.data);
            setaddressess(response.data);
        });
    };


 

   

    const handleChange = (e) => {
        let newAddress = { ...address };
        newAddress[e.target.name] = e.target.value;
        setaddress(newAddress);
    }

    const clearform = () => {
        setaddress({
            street: "",
            city: "",
            state: "",
            zip: "",
            country: ""
        })
    }

    const addAddress = () => {
        axios.post(url,address).then(() => {
            console.log("address added successfully");
            clearform();
            getDataFromServer();
        })
    };

    

  
    const deleteAddress=(add)=>{
            axios.delete(url+add.id).then(()=>{
                console.log("address deleted");
                getDataFromServer();
            })
    }

    const editAddress=(add)=>{
        setaddress(add);
    }

    const updateAddress=()=>{
        axios.put(url+address.id,address).then(()=>{
            console.log("updated");
            getDataFromServer();
            clearform();
        })
    }
     
    return (
        <div>
            <form>
                <label htmlFor="street">Street : </label>
                <input type="text" name="street" value={address.street} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="city">City : </label>
                <input type="text" name="city" value={address.city} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="state">State : </label>
                <input type="text" name="state" value={address.state} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="zip">Zip Code : </label>
                <input type="text" name="zip" value={address.zip} onChange={(e) => { handleChange(e) }} /> <br />


                <label htmlFor="country">Country : </label>
                <input type="text" name="country" value={address.country} onChange={(e) => { handleChange(e) }} /> <br />

                <button type="button" onClick={addAddress}>Add Address</button>

                <button type="button" onClick={updateAddress}>Update Address</button>
            
            <hr />

            <table className="table">
                <thead>
                    <tr>
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
                    {addressess.map((add,i) => {
                        return <tr key={i}>
                            <td>{add.street}</td>
                            <td>{add.city}</td>
                            <td>{add.state}</td>
                            <td>{add.zip}</td>
                            <td>{add.country}</td>
                            <td><button className="btn btn-warning" type="button" onClick={()=>{editAddress(add) }}>Edit</button> </td>
                            <td><button className="btn btn-danger" type="button" onClick={()=>{deleteAddress(add)}}>Delete</button> </td>
                        </tr>
                    })}
                </tbody>
            </table>
            </form>
        </div>
    )
}
