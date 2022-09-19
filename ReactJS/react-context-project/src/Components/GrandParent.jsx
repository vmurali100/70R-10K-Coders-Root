import React from 'react'
import { Parent } from './Parent'

export const GrandParent = ({msg}) => {
  return (
    <div>GrandParent 
<hr/>
        <Parent msg={msg}/>
        
    </div>
  )
}
