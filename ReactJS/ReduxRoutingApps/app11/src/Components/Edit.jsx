import React,{useState} from 'react'
import { json, useNavigate, useParams,Link } from 'react-router-dom';
import axios from 'axios'

export const Edit = () => {
    const btnTxt="Update";
    const url="http://localhost:3202/Filltext2/";
    const navigate=useNavigate();
    let param=useParams();

    let data = JSON.parse(localStorage.getItem('Filltext2'));
    const info= data.find((myuser)=> myuser.id == param.id);
    const [user, setuser] = useState(info)

    const handleChange=(e)=>{
        let newmem={...user};
        newmem[e.target.name]=e.target.value;
        setuser(newmem)
      }
      const handleNestObjChange=()=>{
        
      }
      const handleEvent=()=>{
        axios.put(url+param.id,user).then(()=>{
          console.log("updated successfully");
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
