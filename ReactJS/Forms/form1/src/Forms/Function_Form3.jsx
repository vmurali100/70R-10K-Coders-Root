import React,{useState} from 'react';

export const Function_Form3 = () => {
    const [person, setPerson] = useState({university:"",institute:"",branch:"",degree:"",experience:"",yourwebsiteorblog:""})

     const handleChange=(e)=>{
        // console.log(e.target.value)
        var inputname =e.target.name
        var newPerson ={...person}
        newPerson[inputname]=e.target.value
        setPerson(newPerson)

     }
     const handleSubmit=()=>{
        console.log(person)
    }
         
  return (
    <div>
        <h2>FUNCTION REGISTRATION DETAILS</h2>
       <form>
           <label htmlFor='university'>University :</label>
           <input type="text" name="university" value={person.university} onChange={(e)=>{handleChange(e)}} /> 
           <br/>
           <br/>
           <label htmlFor="institute">Institute :</label>
           <input type="text" name="institute"value={person.institute} onChange={(e)=>{handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="branch">Branch :</label>
           <input type="text" name="branch"value={person.branch} onChange={(e)=>{handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="degree">Degree :</label>
           <input type="text" name="degree"value={person.degree} onChange={(e)=>{handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="experience">Experience :</label>
           <input type="text" name="experience"value={person.experience} onChange={(e)=>{handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="yourwebsiteorblog">Your Website Or Blog :</label>
           <input type="text" name="yourwebsiteorblog"value={person.yourwebsiteorblog} onChange={(e)=>{handleChange(e)}}/> 
           <br />
           <br/>
           <button onClick={handleSubmit} type="button">SUBMIT</button>

       </form>
    </div>
  )
}
