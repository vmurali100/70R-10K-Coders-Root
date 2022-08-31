import React,{useState} from 'react'

export const Fifthfunc = () => {
    const [fifth, setfifth] = useState({
university:"",
institute:"",
branch:"",
degree:"",
averagecpi:"",
experience:"",
yourwebsite:"",
    })

    const handlefunction = (e) => {
        console.log(e.target.value)
        var inputname = (e.target.name)
        var newfifth = { ...fifth}
        newfifth[inputname] = e.target.value
        setfifth(newfifth)
    }

    const handleok=()=>{
        console.log(fifth)
    }
  return (
    <div>
        <p><h1>REGISTRATION DETAILS</h1></p>
        <form>
           <label htmlFor="university">university</label>
           <input type="text" name='university' value={fifth.university} onChange={(e)=>handlefunction(e)} /><br/>

           <label htmlFor="institute">institute</label>
           <input type="text" name='institute' value={fifth.institute} onChange={(e)=>handlefunction(e)} /><br/>

           <label htmlFor="branch">branch</label>
           <input type="text" name='branch' value={fifth.branch} onChange={(e)=>handlefunction(e)} /><br/>

           <label htmlFor="degree">degree</label>
           <input type="text" name='degree' value={fifth.degree} onChange={(e)=>handlefunction(e)} /><br/>

           <label htmlFor="averagecpi">averagecpi</label>
           <input type="text" name='averagecpi' value={fifth.averagecpi} onChange={(e)=>handlefunction(e)} /><br/>


           <label htmlFor="experience">experience</label>
           <input type="text" name='experience' value={fifth.experience} onChange={(e)=>handlefunction(e)} /><br/>

           <label htmlFor="yourwebsite">yourwebsite</label>
           <input type="text" name='yourwebsite' value={fifth.yourwebsite} onChange={(e)=>handlefunction(e)} /><br/>

           <button onClick={handleok} type="button">enter</button>
        </form>
    </div>
  )
}
