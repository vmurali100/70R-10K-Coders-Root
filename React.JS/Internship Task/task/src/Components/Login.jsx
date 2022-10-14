import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { ExamList } from './ExamList'



export const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const [msg,setMsg] = useState("")

    const navigate = useNavigate()

    const handleChange = e => {
        let newLogin = { ...login }
        newLogin[e.target.name] = e.target.value
        setLogin(newLogin)
    }

    // const  handleLogin=()=>  {
    //     fetch("https://e-prathibha.com/apis/login",
    //         {
    //             method: "POST",
    //             body: JSON.stringify(login),
    //             headers : {
    //                 'Content-type' : "application/json"
    //             }
               
    //         })
    //         .then(response => {                         
    //             if (response.status === 200) {

    //                response.json().then(data => { // store user in localStorage as token
    //                   localStorage.setItem("user", JSON.stringify(data));
    //                   navigate("/examlist")
                      
    //                })
                   
                   
    //             }
    //             else if (response.status === 400) {
    //                console.log("Invalid Username or Password or Incorrect Permissions");
                   
    //             }
    //         })
    //         .catch(error => console.log(error))
            
    //  }

     async function handleLogin(){
        const response = await fetch("https://e-prathibha.com/apis/login",
                {
                    method: "POST",
                    body: JSON.stringify(login),
                    headers : {
                        'Content-type' : "application/json"
                    }
                   
                })

                const result = await response.json()

                if(result.status == 200){
                    localStorage.setItem("user",JSON.stringify(result.data))
                    setMsg(result.data.Message)
                    navigate("/examlist")
                }

                else if (result.status==400){
                       setMsg(result.data) 
                }
            }
      


  

    return (
        <div id="container">
                <h2>Hi Student ! Please login to your account to start the exam.</h2> 
                
                <hr/>
            <form>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address :</label>
                    <input type="email" className="form-control" required name='email' value={login.email} onChange={(e) => handleChange(e)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label"> Password :</label>
                    <input type="password" className="form-control" required name='password' value={login.password} onChange={(e) => handleChange(e)} />
                </div>

                <p>{msg}</p>

                <button type="button" className='btn btn-primary' onClick={handleLogin}>LOGIN</button> <br/>

                <p style={{marginTop:"20px"}}> <i>New User ?</i> <Link to="/register" className='btn btn-primary' style={{marginLeft:"20px",marginTop:"0"}}> Register Here </Link></p>

                
                
                <br/>

                
            </form>
        </div>
    )
}
