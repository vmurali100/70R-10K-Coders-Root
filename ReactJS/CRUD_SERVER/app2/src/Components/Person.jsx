import React,{ useEffect,useState } from 'react'
import axios from 'axios'

export const Person = () => {
    const [person, setperson] = useState({"fName":"","lName":"","dob":"","email":"","mobileNumber":""})
    const [persons, setpersons] = useState([])
    let url ="http://localhost:3000/person/";

    useEffect(()=>{
        getDataFromServer()

    },[])
    const getDataFromServer=()=>{
        axios.get(url).then((response)=>{
            console.log(response)
            setpersons(response.data)
        })

    }
    const handleChange=(e)=>{
        let newPerson={...person}
        newPerson[e.target.name]=e.target.value
        setperson(newPerson)
    }
    const handleadd=()=>{
        console.log(person)
        axios.post(url,person).then(()=>{
            console.log("User added successfully")
            clearForm();
            getDataFromServer();
        });


    }
    const clearForm=()=>{
        setperson({"fName":"","lName":"","dob":"","email":"","mobileNumber":""})
    }
    const deleteperson=(pers)=>{
        axios.delete(url+pers.id).then(()=>{
            console.log("User deleted successfully");
            getDataFromServer();

        })

    }
    
   
    const handleEdit =(pers)=>{
        console.log(pers)
        setperson(pers)

    }
    const handleUpdate=()=>{
        axios.put(url+person.id,person).then(()=>{
            console.log("Updated")
            getDataFromServer();
            clearForm()
        })

    }
    
    const{fName,lName,dob,email,mobileNumber}=person;


  return (
    <div className="container">
    <h2>HTML FORM</h2>

          <form> 
            <label htmlFor="">First Name:</label> 
            <input type="text" name="fName" value={fName} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Last Name:</label> 
            <input type="text" name="lName" value={lName} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Date of Birth:</label> 
            <input type="text" name="dob" value={dob} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="">Email :</label> 
            <input type="text" name="email" value={email} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Mobile Number:</label> 
            <input type="text" name="mobileNumber" value={mobileNumber} onChange={(e)=>{handleChange(e)}}/><br/>
            <button onClick={handleadd} type="button">ADD</button>
            <button onClick={handleUpdate} type="button">Update</button>
            
      <table className="table table-success table-striped-columns">
        <thead>
          <tr>
            <th >First Name</th>
            <th >Last Name</th>
            <th > Date of Birth</th>
            <th >Email</th>
            <th>Mobile Number</th>
            <th> Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
      {persons.map((pers,i)=>{
        return <tr key={i}>
          <td >{pers.fName}</td>
          <td >{pers.lName}</td>
          <td >{pers.dob}</td>
          <td >{pers.email}</td>
          <td >{pers.mobileNumber}</td>
          <td><button type="button" className='btn btn-warning' onClick={()=>{handleEdit(pers)}}>Edit</button></td>
          <td><button type="button" className='btn btn-danger' onClick={()=>{deleteperson(pers)}}>Delete</button></td>

        </tr>
      
                    })}
                </tbody>
            </table>
        </form>
    </div>
  )
}

