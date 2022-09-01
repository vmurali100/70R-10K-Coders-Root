import React,{useState} from 'react'

export const User = () => {
    // const [firstname, setfirstname] = useState("")
    const [person, setperson] = useState({
        firstname:"",
        lastname:"",
        dateofbirth:"",
        email:"",
        mobilenumber:""
    })
    const handleChange=(e)=>{
        console.log(e.target.value)
        var inputname = e.target.name 
       var newPerson ={...person}
        newPerson[inputname]=e.target.value 
        setperson(newPerson)
        // setfirstname(e.target.value)
    }
    const handleSubmit=()=>{
        console.log(person)
    }
    const handleClear=()=>{
        setperson({
           
            firstname:"",
            lastname:"",
            dateofbirth:"",
            email:"",
            mobilenumber:""
    })
    }

  return (
    <div>
        <h1>HTML Form</h1>
        <hr />
        <form >
            <label htmlFor="firstname">First Name</label>
            <br />
            <input type="text" name='firstname' value={person.firstname} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="lastname">Last Name</label>
            <br />
            <input type="text" name='lastname' value={person.lastname} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="dateofbirth">Date Of Birth</label>
            <br />
            <input type="text" name='dateofbirth' value={person.dateofbirth} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="emailid">Email Id</label>
            <br />
            <input type="text" name='emailid' value={person.emailid} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="mobilenumber">Mobile Number</label>
            <br />
            <input type="text" name='mobilenumber' value={person.mobilenumber} onChange={(e)=>{handleChange(e)}}/>
<br />
            <button onClick={handleSubmit} type="submit">Submit</button>
            <button onClick={handleClear} type="button">RESET</button>
        </form>
    </div>
  )
}
