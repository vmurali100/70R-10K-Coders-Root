import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

export const Delete = () => {
  let url='http://localhost:3301/FakeProd/';
  let objurl= useParams();
  let navigate = useNavigate();

  const handleDelete=()=>{
    axios.delete(url+objurl.id).then(()=>{
      navigate("/products")
    })
  }
  return (
    <div>
   <p> Are u sure u want to delete??</p>   
   <p><button type='button' onClick={handleDelete}>Delete</button>
   <Link to={'/products'}> <button type="button">Cancel</button> </Link>

   </p>

    </div>
  )
}
