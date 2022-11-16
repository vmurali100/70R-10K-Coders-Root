import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userVerify } from '../Store/userSlice'
import { Link, useNavigate } from 'react-router-dom';

const Verify = () => {

    const [verifycode, setVerifycode] = useState({
        reg_code: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = e => {
        let newVerifycode = { ...verifycode }
        newVerifycode[e.target.name] = e.target.value
        setVerifycode(newVerifycode)
    }
    const handleVerify = async()=>{
        const ver_data = await dispatch(userVerify(verifycode))
        if (ver_data.payload.status===200){
            navigate("/")
         }
    }

  return (
    <form>
        <div className="container mb-3">
                    <label htmlFor="email" className="form-label">Enter the Code</label>
                    <input type="name" className="form-control" name='reg_code' value={verifycode.reg_code} onChange={(e) => handleChange(e)} />
                </div>
                <button type="button" className='btn btn-secondary' onClick={handleVerify}>Submit</button> <br />
                <br />
                <Link to="/" className='btn btn-primary'>Go Back</Link>
    </form>
  )
}

export default Verify