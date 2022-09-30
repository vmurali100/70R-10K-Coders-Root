import React,{useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Create = () => {
    const btnTxt="Add";
    const url="http://localhost:3202/Filltext2";
    const navigate=useNavigate();
    let param=useParams();
    const [user, setuser] = useState({
        id:"",
        fname:"",
        lname:"",
        email:"",
    })

    const handleChange=(e)=>{
        let newmem={...user};
        newmem[e.target.name]=e.target.value;
        setuser(newmem)
      }
      const handleEvent=()=>{
        axios.post(url,user).then(()=>{
          console.log("added successfully");
          navigate("/Filltext2")
        })
      }
  return (
    <div>
        <form>

<div className="mb-3">
    <label htmlFor="id" className="form-label">ID : </label>
    <input type="text" className="form-control" name="id" value={user.id} onChange={(e) => { handleChange(e) }} />
</div>

<div className="mb-3">
    <label htmlFor="userId" className="form-label">Fname : </label>
    <input type="text" className="form-control" name="fname" value={user.fname} onChange={(e) => { handleChange(e) }} />
</div>

<div className="mb-3">
    <label htmlFor="date" className="form-label">Lname : </label>
    <input type="text" className="form-control" name="lname" value={user.lname} onChange={(e) => { handleChange(e) }} />
</div>

<div className="mb-3">
    <label htmlFor="productId" className="form-label">Email: </label>
    <input type="text" className="form-control" name="email" value={user.email} onChange={(e) => { handleChange(e) }} />
</div>


<button type="button" className='btn btn-primary' onClick={handleEvent} >{btnTxt}</button>
<Link to={'/'} className='btn btn-primary' style={{marginLeft:"10px"}}>Cancel</Link>

</form>
    </div>
  )
}
