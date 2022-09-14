import React from 'react'
import { Parent } from './Parent'

export const GrandParent = ({msg}) => {
    // console.log(msg)
  return (
    <div>
        <p>GrandParent Component</p>
         <hr />
         <Parent msg={msg}/>
    </div>
  )
}
