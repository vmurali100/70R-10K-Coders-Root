import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

export const College = () => {
    const [college, setcollege] = useState({"university":"","institute":"","branch":"","degree":"","experience":"","yourwebsiteorblog":""})
    const [colleges, setcolleges] = useState([])
    let url="http://localhost:3000/college/"
    useEffect(()=>{
        getDataFromServer()
        
    },[])
    const getDataFromServer=()=>{
        axios.get(url).then((response)=>{
            console.log(response)
            setcolleges(response.data)
        })
    }
    const handleChange=(e)=>{
        let newCollege={...college}
        newCollege[e.target.name]=e.target.value
        setcollege(newCollege)
    }
    const handleAdd=()=>{
        console.log(college)
        axios.post(url,college).then(()=>{
            console.log("Added")
            clearForm()
            getDataFromServer()   
        })

    }
    const handleUpdate=()=>{
        axios.put(url+college.id,college).then(()=>{
            console.log("Updated")
            clearForm()
            getDataFromServer() 

        })
        
    }
    const handleEdit=(clg)=>{
        console.log(clg)
        setcollege(clg)
        
    }
    const deletecollege=(college)=>{
        axios.delete(url+college.id,).then(()=>{
            console.log("Deleted")
            getDataFromServer() 

        })
        
        
    }
    const clearForm=()=>{
        setcollege({"university":"","institute":"","branch":"","degree":"","experience":"","yourwebsiteorblog":""})
    }


    const{university,institute,branch,degree,experience,yourwebsiteorblog}=college;

  return (  
    
    <div>
  <h2>REGISTRATION DETAILS</h2>
 <form>
     <label htmlFor=''>University :</label>
     <input type="text" name="university" value={university} onChange={(e)=>{handleChange(e)}} /> <br/>
     <label htmlFor="">Institute :</label>
     <input type="text" name="institute"value={institute} onChange={(e)=>{handleChange(e)}}/> <br/>
     <label htmlFor="">Branch :</label>
     <input type="text" name="branch"value={branch} onChange={(e)=>{handleChange(e)}}/> <br/>
     <label htmlFor="">Degree :</label>
     <input type="text" name="degree"value={degree} onChange={(e)=>{handleChange(e)}}/> <br/>
     <label htmlFor="">Experience :</label>
     <input type="text" name="experience"value={experience} onChange={(e)=>{handleChange(e)}}/> <br/>
     <label htmlFor="">Your Website Or Blog :</label>
     <input type="text" name="yourwebsiteorblog"value={yourwebsiteorblog} onChange={(e)=>{handleChange(e)}}/><br/> 

     <button onClick={handleAdd} type="button">ADD</button>
     <button onClick={handleUpdate} type="button">Update User</button>


     </form>
     <table class="table table-dark table-hover">

<thead>
<tr>
<th >University</th>
<th >Institute</th>
<th > Branch</th>
<th> Degree</th>
<th>Experience</th>
<th >Yourwebsiteorblog</th>
<th> Edit</th>
<th>Delete</th>
</tr>
</thead>
<tbody>
{colleges.map((clg,i)=>{
   return <tr key={i}>
       <td>{clg.university}</td>
       <td>{clg.institute}</td>
       <td>{clg.branch}</td>
       <td>{clg.degree}</td>
       <td>{clg.experience}</td>
       <td>{clg.yourwebsiteorblog}</td>
       <td><button type='text' className='btn btn-warning'onClick={()=>{handleEdit(clg)}} >Edit</button></td>
       <td><button type='text' className='btn btn-danger' onClick={()=>{deletecollege(clg)}}>Delete</button></td>

   </tr>
})}
</tbody>
</table>

     </div>
)
}
