import React, { useState } from 'react'

export const Formwithfunction = () => {
    const [Person, setPerson] = useState({
        firstname: "",
        lastname: "",
        DOB: "",
        emailId: "",
        mobileno: "",
    })
    const handlechange = (e) => {
        var input = e.target.name;
        var newPerson = { ...Person };
        newPerson[input] = e.target.value;
        setPerson(newPerson);
    }
    const handleSubmit = () => {
        console.log(Person);
    }
    const handleReset = () => {
        setPerson({
           
                firstname: "",
                lastname: "",
                DOB: "",
                emailId: "",
                mobileno: "",   
           
        })
    }
   const {firstname,lastname,DOB,emailId,mobileno } = Person;
    return (
        <div>
            <h2>HTML Form</h2><hr />
            <form>
                <label >First Name:</label>
                <input type="text" name="firstname" value={firstname} onChange={(e) => { handlechange(e) }} /> <br />
                <label >Last Name:</label>
                <input type="text" name="lastname" value={lastname} onChange={(e) => { handlechange(e) }} /> <br />
                <label >DOB:</label>
                <input type="text" name="DOB" value={DOB} onChange={(e) => { handlechange(e) }} /> <br />
                <label >EmailId:</label>
                <input type="text" name="emailId" value={emailId} onChange={(e) => { handlechange(e) }} /> <br />
                <label >Mobile NO:</label>
                <input type="text" name="mobileno" value={mobileno} onChange={(e) => { handlechange(e) }} /> <br />
                <button type="button" onClick={handleSubmit}>SUBMIT</button>
                <button type="button" onClick={handleReset}>RESET</button>
            </form>
        </div>
    )
}
