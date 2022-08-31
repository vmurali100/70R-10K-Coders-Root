import React,{useState} from 'react';

export const Cart = () => {
    //const [street, setstreet] = useState("")//to declare variable,to pass additional funct. need to place arrow functn
    const [address, setaddress] = useState({street:"",city:"",state:"",zipcode:"",country:""})

     const handleChange=(e)=>{//synthetic element
        console.log(e.target.value)//to read element
        var inputname =e.target.name
        var newaddress ={...address}//creating an copy of object
        newaddress[inputname]=e.target.value
        setaddress(newaddress)
        console.log(inputname)

        //setstreet(e.target.value)//to update,used for inputfield 1
     }
        const handleOK=()=>{
            console.log(address)
        }

        const handleCancel=()=>{
            console.log(address)
        }

     
  return (
    <div>
       <form>
           <label htmlFor='street'>Street :</label>
           <input type="text" name="street" value={address.street} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="city">City :</label>
           <input type="text" name="city"value={address.city} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="state">State :</label>
           <input type="text" name="state"value={address.state} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="zipcode">Zip code :</label>
           <input type="text" name="zipcode"value={address.zipcode} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="country">Country :</label>
           <input type="text" name="country"value={address.country} onChange={(e)=>{handleChange(e)}}/> <br/>
           <button onClick={handleOK} type="button">OK</button>
           <button onClick={handleCancel} type="button">Cancel</button>

       </form>
    </div>
  )
}

