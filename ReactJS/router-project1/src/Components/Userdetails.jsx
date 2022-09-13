import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Userdetails = () => {
    const[studentInfo,setstudentInfo]=useState({})
   const urlObj= useParams()
useEffect(()=>{
    console.log(urlObj)


},[])
// const url="http://localhost:3201/userdetails/";
// axios.get(url+urlObj.id).then((res)=>{

//     console.log(res.data)
//     setstudentInfo(res.data)





// const students = JSON.parse(localStorage.getItem("Students"))
// const student=students.find((userdetails)=>userdetails.id == urlObj.id)


  return (
    <div className='container'>
        {Object.keys(studentInfo).length>0 && <div className='card'>
            <div className='card-body'>
                <p className='card-text'>{studentInfo.studentname}</p>
                <p className='card-text'>{studentInfo.email}</p>

            </div>
            
          </div>  }

    </div>
  )
}
// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { userdata} from "./userdata.json"
// function Userdetails() {
//     const {id} =useParams()

//   return (
//     <div className='list of users'>
//         <div className='userdisplay'>
//             <h1>{Userdetails[id-1].studentname}</h1>{''}
//             <p>{Userdetails[id-1].mobileno}</p>{''}
//         </div>
//     </div>
//   )
// }
// export default Userdetails