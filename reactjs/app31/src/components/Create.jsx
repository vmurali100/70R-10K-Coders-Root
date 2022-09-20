import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Create = () => {
    const [shiva, setshiva] = useState({
        id: "",
        fname: "",
        lname: "",
        tel: "",
        address: "  ",
        city: "",
        state: "",
        zip: "",
    })

    let url = "http://localhost:4002/two/"

    const navigate = useNavigate()

    const handlechange = (e) => {
        let newshivas = { ...shiva }
        newshivas[e.target.name] = e.target.value
        setshiva(newshivas)
    }

    const handlesubmit = () => {
        axios.post(url, shiva).then((res) => {
            console.log(res.data)
            setshiva(res.data)
            navigate("/")
        })

    }
    return (
        <div>
            <form >
                <label htmlFor="id">ID</label>
                <input type="text" name='id' value={shiva.id} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="fname">Fname</label>
                <input type="text" name='fname' value={shiva.fname} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="lname">LNAME</label>
                <input type="text" name='lname' value={shiva.lname} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="tel">TEL</label>
                <input type="text" name='tel' value={shiva.tel} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="address">address</label>
                <input type="text" name='address' value={shiva.address} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="city">city</label>
                <input type="text" name='city' value={shiva.city} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="state">STATE</label>
                <input type="text" name='state' value={shiva.state} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="zip">ZIP</label>
                <input type="text" name='zip' value={shiva.zip} onChange={(e) => { handlechange(e) }} /><br />

                <button type='button' onClick={handlesubmit}>SUBMIT</button>
            </form>
        </div>
    )
}
