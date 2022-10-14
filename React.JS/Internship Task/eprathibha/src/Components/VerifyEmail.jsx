import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { verifyUser } from '../Store/Slice'

export const VerifyEmail = () => {

    const [code, setcode] = useState({
        reg_code:""
    })

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleChange = e => {
        let newCode = {...code}
        newCode[e.target.name] = e.target.value
        setcode(newCode)
    }

     const handleCode = () => {
         dispatch(verifyUser(code))
         navigate("/")
        
    }


  return (
    <div className="container">
        <p><b>Registration successfull.</b></p>
        <p>Verfiy your email below by entering the code sent to your email address</p>
        <input type="text" name="reg_code" value={code.reg_code} onChange={(e)=>handleChange(e)}/>
        <button type="button" className='btn btn-primary' onClick={handleCode}>Verify</button>
        {/* <p>{message}</p> */}

    </div>
  )
}
