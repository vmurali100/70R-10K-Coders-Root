import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Detail = () => {
  const [shiva, setshiva] = useState({})

  useEffect(() => {
    const information = JSON.parse(localStorage.getItem("two"))

    const result = information.find((a) => a.id == objurl.id)
    setshiva(result)
  }, [])


  const objurl = useParams()

  return (
    <div>
     
      {Object.keys(shiva).length > 0 && <div class="card" >

        <div class="card-body">

          <p class="card-text">{shiva.id}</p>
          <p class="card-text">{shiva.fname}</p>
          <p class="card-text">{shiva.lname}</p>
          <p class="card-text">{shiva.tel}</p>
          <p class="card-text">{shiva.address}</p>
          <p class="card-text">{shiva.city}</p>
          <p class="card-text">{shiva.state}</p>
          <p class="card-text">{shiva.zip}</p>

          <Link to='/' type='button' className='btn btn-primary'>GO BACK</Link>

        </div>
      </div>}
    </div>
  )
}
