import React,{useState} from 'react'

export const Onefunc = () => {
    const [vijay, setvijay] = useState({
        firstname: "",
        lastname: "",
        dateofbirth: "",
        emailid: "",
        mobilenumber: "",
    })

    const handlefunction = (e) => {
        console.log(e.target.value)
        var inputname = e.target.name
        var newvijay = { ...vijay }
        newvijay[inputname] = e.target.value
        setvijay(newvijay)
    }
     const handlesubmit=()=>{
        console.log(vijay)
     }

     const handlereset=()=>{
       setvijay({
        firstname: "",
        lastname: "",
        dateofbirth: "",
        emailid: "",
        mobilenumber: "",
       })
     }
    return (
        <div>
            <p><h1>HTML FORM</h1></p>
            <form >
                <label htmlFor="firstname">first name:</label>
                <input type="text" name="firstname" value={vijay.firstname} onChange={(e) => { handlefunction(e) }} /> <br />

                <label htmlFor="lastname">last name:</label>
                <input type="text" name="lastname" value={vijay.lastname} onChange={(e) => { handlefunction(e) }} /> <br />

                <label htmlFor="dateofbirth">Date of birth:</label>
                <input type="text" name="dateofbirth" value={vijay.dateofbirth} onChange={(e) => { handlefunction(e) }} /> <br />

                <label htmlFor="emailid">email id:</label>
                <input type="text" name="emailid" value={vijay.emailid} onChange={(e) => { handlefunction(e) }} /> <br />

                <label htmlFor="mobilenumber">mobilenumber:</label>
                <input type="text" name="mobilenumber" value={vijay.mobilenumber} onChange={(e) => { handlefunction(e) }} /> <br />


                <button onClick={handlesubmit} type="button">Submit</button>
                <button onClick={handlereset} type="button">Reset</button>
            </form>
        </div>
    )
}
