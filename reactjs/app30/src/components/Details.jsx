import React,{useState} from 'react'
import { useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'

export const Details = () => {

  const objurl=useParams()
  const [das, setdas] = useState({})

  useEffect(()=>{
    const information = JSON.parse(localStorage.getItem("one"))

    const result = information.find((a) => a.id == objurl.id)
    setdas(result)
  },[])
  return (
    <div>
      {Object.keys(das).length > 0 && <div class="card" >

<div class="card-body">

    <p class="card-text">{das.id}</p>
    <p class="card-text">{das.fname}</p>
    <p class="card-text">{das.lname}</p>
 
    <Link to="/" type='button' className='btn-btn-primary'>GO BACK TO DAS</Link>
</div>
</div>}
    </div>
  )
}
