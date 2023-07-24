import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Verify } from '../store/userSlice';
import { Link } from 'react-router-dom'
export const Verifyemail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reg_code, setreg_code] = useState('');
 const handleVerify=()=>{
  console.log(reg_code)
    dispatch(Verify({reg_code}));
    alert("verified successfully");
  navigate("/main")
  }
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
        <form onSubmit={onSubmit}>
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