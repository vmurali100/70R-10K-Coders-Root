import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const UserFn = () => {
    
    useEffect(()=>{
        getUsers()
    },[])

    const getUsers =()=>{
        let url="http://filltext.com/?rows=10&id={index}&email={email}&uname={username}&pwd={password}&pretty=true";  
        axios.get(url).then((res)=>{
            console.log(res.data)
        });
    }
  return (

    <div>
        UserFn
    </div>
  )
}
