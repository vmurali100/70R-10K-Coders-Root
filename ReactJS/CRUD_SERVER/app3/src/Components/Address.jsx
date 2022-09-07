import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

export const Address = () => {
    const [address, setaddress] = useState({"street":"","city":"","state":"","zipcode":"","country":""})
    const [addresses, setaddresses] = useState([])

    let url="http://localhost:3000/address/"
    useEffect(()=>{
        getDataFromServer()
    },[])
    const getDataFromServer =()=>{
        axios.get(url).then((response)=>{
            console.log(response)
            setaddresses(response.data)
        })
    }
    const handleChange =(e)=>{
     let newAddress={...address}
        newAddress[e.target.name]=e.target.value
        setaddress(newAddress)

    }
    const handleadd=()=>{
        console.log(address)
        axios.post(url,address).then(()=>{
            console.log("User added successfully")
            clearForm()
            getDataFromServer()

        })

    }
    const clearForm=()=>{
        setaddress({"street":"","city":"","state":"","zipcode":"","country":""})
    }
    const  deleteaddress=(addr)=>{
        axios.delete(url+addr.id).then(()=>{
            console.log("deleted")
            getDataFromServer(); 

        })
}
    
    const handleUpdate=()=>{
        axios.put(url+address.id,address).then(()=>{
            console.log("Updated")
            clearForm()
            getDataFromServer()

        })

    }
    const handleEdit=(addr)=>{
        console.log(addr)
        setaddress(addr)

    }
    const{street,city,zipcode,country,state}=address
  return  (
    <div>
        <h2>ADDRESS</h2>
       <form>
           <label htmlFor=''>Street :</label>
           <input type="text" name="street" value={street} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="">City :</label>
           <input type="text" name="city"value={city} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">State :</label>
           <input type="text" name="state"value={state} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Zip code :</label>
           <input type="text" name="zipcode"value={zipcode} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Country :</label>
           <input type="text" name="country"value={country} onChange={(e)=>{handleChange(e)}}/> <br/>
           <button onClick={handleadd} type="button">ADD</button>
           <button onClick={handleUpdate}type="button">Update</button>

       </form>
       <table class="table table-hover">
            <thead >
                <tr >
                    <th >Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zipcode</th>
                    <th>Country</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
              {addresses.map((addr,i)=>{
                return <tr key={i}>
                <td>{addr.street}</td>
                <td>{addr.city}</td>
                <td>{addr.state}</td>
                <td>{addr.zipcode}</td>
                <td>{addr.country}</td>
                <td><button  type="button" className='btn btn-warning' onClick={()=>{handleEdit(addr)}}>Edit</button></td>
                <td><button  type="button" className='btn btn-danger' onClick={()=>{deleteaddress(addr)}}>Delete</button></td>
                </tr>
              })}
            </tbody>
        </table>
    </div>
  )
}

