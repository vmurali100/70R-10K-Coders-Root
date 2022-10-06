import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const VerifyEmail = () => {

    const navigate = useNavigate()
    const [code, setCode] = useState({
        reg_code : ""
    })

    const [message,setMessage] = useState("")

const handleChange=(e)=>{
    let newCode = {...code}
    newCode[e.target.name]=e.target.value;
    setCode(newCode)
}

async function handleCode(){
        const response = await fetch("https://e-prathibha.com/apis/verifyEmail",{
            method:"POST",
            body:JSON.stringify(code),
            headers : {
                'Content-type' : 'application/json'
            }
         })

         const result = await response.json()
         console.log(result)
         setMessage(result.data.message)
         navigate("/")
}


    
  return (
    <div id="container">
        <p><b>Registration successfull.</b></p>
        <p>Verfiy your email below by entering the code sent to your email address</p>
        <input type="text" name="reg_code" value={code.reg_code} onChange={(e)=>handleChange(e)}/>
        <button type="button" className='btn btn-primary' onClick={handleCode}>Verify</button>
        <p>{message}</p>

    </div>
  )
}
