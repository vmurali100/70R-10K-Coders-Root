import React from 'react'
import {Hocp} from './hocp'

const ClickPrac = (props) => {
  return (
    <div onClick={props.handleCountPrac}>click for {props.count} times</div>
  )
}

export default Hocp(ClickPrac);