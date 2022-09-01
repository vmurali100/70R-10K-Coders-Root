import React,{useState} from 'react'

export const Form4 = () => {
    // const [firstname, setfirstname] = useState("")
    const [person, setperson] = useState({
        university:"",
        institute:"",
        branch:"",
        degree:"",
        avgcgp:"",
        yourwebsite:""
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
  return (
    <div>
        <h1>Registration Details</h1>
        <form >
            <label htmlFor="university">University</label>
            <input type="text" name='university' value={person.university} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="institute">Institute</label>
            <input type="text" name='institute' value={person.institute} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="branch">Branch</label>
            <input type="text" name='branch' value={person.branch} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="degree">Degree</label>
            <input type="text" name='degree' value={person.degree} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="avgcgp">Avg CGPA</label>
            <input type="text" name='avgcgp' value={person.avgcgp} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="experience">Experience</label>
            <input type="text" name='experience' value={person.experience} onChange={(e)=>{handleChange(e)}}/>
<br />
<label htmlFor="yourwebsite">Your Website Or Blog</label>
            <input type="text" name='yourwebsite' value={person.yourwebsite} onChange={(e)=>{handleChange(e)}}/>
<br />
            <button onClick={handleSubmit} type="button">Sign Up</button>
        </form>
    </div>
  )
}
