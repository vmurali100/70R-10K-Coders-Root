import React,{useState} from 'react'

export const UserGender = () => {
    const [genderValues, setgenderValues] = useState({
        gender:''
    })
  return (
    <div>
        <form action="">
            <label htmlFor="">Gender</label> <br />
            Male <input type="radio" value="Male" /> <br />
            Female<input type="radio" value="Female"/> <br />
            <button> Get Gender</button>
        </form>
    </div>
  )
}
