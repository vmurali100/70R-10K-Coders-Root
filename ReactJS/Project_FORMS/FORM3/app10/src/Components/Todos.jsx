import React,{useState} from 'react';

export const Todos = () => {
    const [info, setinfo] = useState({university:"",institute:"",branch:"",degree:"",Experience:"",yourwebsiteorblog:""})

     const handleChange=(e)=>{//synthetic element
        console.log(e.target.value)//to read element
        var inputname =e.target.name
        var newinfo ={...info}//creating an copy of object
        newinfo[inputname]=e.target.value
        setinfo(newinfo)

     }
     const handleSubmit=()=>{
        console.log(info)
    }
         
  return (
    <div>
        <h2>REGISTRATION DETAILS</h2>
       <form>
           <label htmlFor='university'>University :</label>
           <input type="text" name="university" value={info.university} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="institute">Institute :</label>
           <input type="text" name="institute"value={info.institute} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="branch">Branch :</label>
           <input type="text" name="branch"value={info.branch} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="degree">Degree :</label>
           <input type="text" name="degree"value={info.degree} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="experience">Experience :</label>
           <input type="text" name="experience"value={info.experience} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="yourwebsiteorblog">Your Website Or Blog :</label>
           <input type="text" name="yourwebsiteorblog"value={info.yourwebsiteorblog} onChange={(e)=>{handleChange(e)}}/> 

           <button onClick={handleSubmit} type="button">SUBMIT</button>

       </form>
    </div>
  )
}

