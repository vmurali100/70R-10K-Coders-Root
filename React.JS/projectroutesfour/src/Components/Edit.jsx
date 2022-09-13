import axios from 'axios'
import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {useState} from 'react'


export const EditCart = () => {
    const objUrl = useParams()
    const navigate = useNavigate()
    let url = " http://localhost:3201/items/"
    const Info = JSON.parse(localStorage.getItem("Items"))
    const result = Info.find((inf)=> inf.id == objUrl.id)
    const [items, setItems] = useState(result)

    const handleChange = e => {
       let newItems = {...items}
       newItems[e.target.name] = e.target.value
       setItems(newItems)
    }

    

    const updateCart=()=>{
        axios.put(url+objUrl.id,items).then(()=>{
            navigate("/")
        })
    }

  return (
    <div>
        <form>
            <label htmlFor="id">ID:</label>
            <input type="text" name="id" value={items.id} onChange={handleChange} /> <br/>

            <label htmlFor="userId">UserID:</label>
            <input type="text" name="userId" value={items.userId} onChange={handleChange} /> <br />

            <button type="button" className='btn btn-primary' onClick={updateCart}>Update Cart</button>
        </form>
    </div>
  )
}
