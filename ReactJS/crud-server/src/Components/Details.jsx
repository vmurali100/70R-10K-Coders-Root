import React,{useState,useEffect} from 'react'
import axios from 'axios'

export const Details = () => {
    const [data, setdata] = useState([]);
    let url="https://filltext.com/?rows=10&id={index}&email={email}&username={username}&address={addressObject}&password={randomString|5}&pretty=true";
    useEffect(()=>{
        
        axios.get(url).then((response)=>{
            console.log(response.data);
            setdata(response.data);
        })
    },[url]);
    // const [user, setuser] = useState({
    //     id: "",
    //     email: "",
    //     username: "",
    //     password: "",
    // })  
  return (
    <div>
        <h2>Details</h2>
    <ul>
    {data.map((user,index) => {
        for(let i=0;i<data.length;i++){
            return <li key={index}> {user[i]} </li>;
    }
        
        // <li key={i}>{user.email}</li>;
        // <li key={i}>{user.username}</li>;
        // <li key={i}>{user.password}</li>;
    
    })}
    </ul>
    </div>
  )
}
