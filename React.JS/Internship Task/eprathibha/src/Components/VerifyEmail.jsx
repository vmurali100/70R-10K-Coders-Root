import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { verifyUser } from '../Store/Slice'

export const VerifyEmail = () => {
    const [code, setcode] = useState({
        reg_code:""
    })
    const [error, setError] = useState("")
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const handleChange = e => {
        let newCode = {...code}
        newCode[e.target.name] = e.target.value
        setcode(newCode)
    }
   const handleCode = async () => {
       const verStat =   await dispatch(verifyUser(code))
       if(verStat.payload.status === 200){
        alert("Email verified ! Please login using your email and")
        navigate("/")
       }
       else if(verStat.payload.status !== 200){
         setError(verStat.payload.data)
         clearform()
       }
    }

  const clearform = () => {
    setcode({
      reg_code:""
    })
  }
return (
    <div className="container verify">
         <p><b>Verfiy your email below by entering the code sent to your email address</b></p>
        <input type="text" name="reg_code" value={code.reg_code} onChange={(e)=>handleChange(e)}/>
        <button type="button" className='btn btn-primary' onClick={handleCode}>Verify</button>
        <p style={{color:"Red"}}>{error}</p>
    </div>
  )
}
