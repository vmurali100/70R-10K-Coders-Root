import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
export const Verifyemail = () => {

  const navigate = useNavigate();
  const[email,setemail] =useState('')
  const [reg_code, setreg_code] = useState('');
 const handleVerify=()=>{
  console.log(reg_code)
    
    alert("verified successfully");

    navigate("/main")
  }
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
        <form onSubmit={onSubmit}>
 
        <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control form-control-lg"
          placeholder=""
          name="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
  <div className="field">
      <div className="customInput">
       
        <input
          className="inputfield"
          type="code"
          placeholder="code.."
          autoComplete="new-code"
          name="reg_code"
          value={reg_code}
          onChange={(e) => {
            setreg_code(e.target.value);
          }}
        
        />
      </div>
      <div id="VerifyHelp" className="form-text">Enter the Registered Code You Recieved.</div>
    </div>
 
  <button type="button" className="btn btn-primary" onClick={handleVerify} >Submit</button>
  <Link to="/" className="btn btn-info" style={{marginLeft:"25px"}}> Cancel</Link>
</form>
    </div>
  )
}

export default Verifyemail