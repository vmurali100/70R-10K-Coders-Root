import React from 'react'
import { Parent } from './Parent'

export const GrandParent = ({msg}) => {    //props.msg= we acess from main component by using destructuring we use msg.
  console.log(msg)
    return (
    <div>
        <p>GrandParent  Component</p>
        <hr/>
        <Parent msg={msg}/>
    </div>
  )
}
