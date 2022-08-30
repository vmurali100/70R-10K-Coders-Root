import React,{useState} from 'react'

export const Form1 = () => {
    const [person, setPerson] = useState({
        Street :"",
        City:"",
        State:"",
        ZipCode:"",
        country:""
    })
 const handleChange=(e)=>{
    console.log(e.target.value)
    var inputname=e.target.name;
    var newPerson={...person}
    newPerson[inputname] = e.target.value
    setPerson(newPerson)
}
const handleSubmit=()=>{
    console.log(person)
}
const handleCancel=()=>{
    setPerson({person:{
        Street:"",
        City:"",
        State:"",
        ZipCode:"",
        country:""
}})
}
  return (
    <div>
        <h2>Address</h2>
        <hr/>
<form>
    <label htmlFor="Street">Street : </label>
    <input type="text" name="Street" value={person.Street} onChange={(e)=>{handleChange(e)}}/> <br/>
    <label htmlFor="City">City : </label>
    <input type ="text" name="City" value={person.City} onChange={(e)=>{handleChange(e)}}/> <br/>
    <label htmlFor="State">State : </label>
    <input type="text" name="State" value={person.State} onChange={(e)=>{handleChange(e)}}/> <br/>
    <label htmlFor="Zipcode">ZipCode : </label>
    <input type ="text" name="ZipCode" value={person.ZipCode} onChange={(e)=>{handleChange(e)}}/> <br/>
    <label htmlFor="country">Country : </label>
    <input type ="text" name="country" value={person.country} onChange={(e)=>{handleChange(e)}}/> <br/>
    <button onClick={handleSubmit} type="button">OK</button>
    <button onClick={handleCancel} type="button">Cancel</button>
</form>
    </div>
  )
}
