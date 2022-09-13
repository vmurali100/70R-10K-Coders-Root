import React,{useState} from 'react'

export const FormReg = () => {
    const [branches, setbranches] = useState(["", "Arts","Science"]);
    const [selectedBranch, setselectedBranch] = useState("");

    const [degree, setdegree] = useState(["", "B.Sc","B.Com","B.A","B.BA"]);
    const [selectedDegree, setselectedDegree] = useState("");

    const [educationStatus, seteducationStatus] = useState("");

    const handleBranch=(e)=>{
        setselectedBranch(e.target.value);
        console.log(e.target.value);
    }

    const handleDegree=(e)=>{
        setselectedDegree(e.target.value);
        console.log(e.target.value);
    }    

    const handleeducationStatus =(e)=>{
        seteducationStatus(e.target.value);
    }
return (
    <div className="container">
     <form action="">
    <fieldset>
  <legend>Registration Details</legend>
    <table align="center">
    <tbody>
    <tr>
    <td> <label htmlFor="">University : </label></td>
    <td><input type="text" /></td></tr>
    <tr>
    <td> <label htmlFor="">Institute : </label></td>
    <td><input type="text" /></td></tr>
    <tr>
        <td> <label htmlFor="">Branch : </label></td>
        <td><select name="" id="" value={selectedBranch} onChange={(e)=>{handleBranch(e)}} placeholder="select subject" >
            {branches.map((sub,i)=>(
                <option value={sub} key={i}> {sub} </option>
            ))}
        </select></td>
    </tr>
    <tr>
        <td> <label htmlFor="">Degree : </label></td>
        <td><select name="" id="" value={selectedDegree} onChange={(e)=>{handleDegree(e)}}  >
            {degree.map((sub,i)=>(
                <option value={sub} key={i}> {sub} </option>))} </select></td>
             <td>   <label htmlFor="">Persuing</label>
            <input type="radio" value="Persuing" checked={educationStatus === "Persuing"} onChange={(e)=>{handleeducationStatus(e)}}/> </td>
            <td><label htmlFor="">Completed</label>
            <input type="radio" value="Completed" checked={educationStatus === "Completed"} onChange={(e)=>{handleeducationStatus(e)}}/> </td>
            </tr>
            <tr>
        <td> <label htmlFor="">Average CPI : </label></td>
        <td> <input type="number" /></td>
        <td>Upto<input type="number" />Th Semester</td>
    </tr>
    <tr>
        <td><label htmlFor="">Experience : </label></td>
        <td><input type="number" />Years</td>
    </tr>
    <tr>
        <td><label htmlFor="">Your Website Or Blog :</label></td>
        <td><input type="text" placeholder='http://' /></td>
    </tr>
    
    </tbody>  
    </table>     
    <button type="button"> Submit</button>                       
    </fieldset> <br />
 
            </form>
        </div>
    )
}
                      
                        
                    
                