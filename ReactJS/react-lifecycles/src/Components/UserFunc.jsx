import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const UserFunc = () => {
    useEffect(()=>{//capable of handling api:equal to component did mount.
        getAllUsers()

    },[])//[] passing set time interval
    const getAllUsers =()=>{
        let url="http://filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
        axios.get(url).then((res)=>{
            console.log(res)

        })

    }
  return (
    <div>UserFunc</div>
  )
}
