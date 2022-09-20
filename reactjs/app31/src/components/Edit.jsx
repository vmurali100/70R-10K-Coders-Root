import React,{useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'


export const Edit = () => {

  let url ="http://localhost:4002/two/"

  const objurl = useParams()

  const information = JSON.parse(localStorage.getItem("two"))

  const result = information.find((a)=>a.id==objurl.id)
  
const [shiva, setshiva] = useState(result)

const navigate = useNavigate()

  const handlechange = (e) => {
    let newshivas = { ...shiva }
    newshivas[e.target.name] = e.target.value
    setshiva(newshivas)

  }

  const handleupdate = () => {
    axios.put(url + objurl.id, shiva).then(() => {
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

                <button type='button' onClick={handleupdate}>UPDATE</button>
            </form>
    </div>
  )
}
