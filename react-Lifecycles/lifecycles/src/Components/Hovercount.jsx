import React from 'react'
import { HOCcomp } from './HOCcomp'

const Hovercount = (props) => {

  return (
    <div>
        <h2 onMouseOver={props.handlecount}>Hover on me -hovered{props.count}</h2>
    </div>
  )
}
export default HOCcomp(Hovercount)