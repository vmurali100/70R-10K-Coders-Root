import React,{useContext} from 'react'
import {StudentContext} from './SudentsContext'
import {User} from './User'

export const Child = ({msg}) => {
    const allStudents =  useContext(StudentContext);
    console.log(allStudents);
  return (
    <div>
        
        Child Component 
        <hr/>
        <User msg={msg}/>
        
        </div>
  )
}
