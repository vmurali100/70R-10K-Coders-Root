import React from 'react'
import { Parent } from './Parent'

export const Grandparent = ({msg}) => {
  return (
    <div>
      <p><b>Grandparent component</b></p>  
      <hr />
      <Parent msg={msg}/>
        </div>
  )
}
