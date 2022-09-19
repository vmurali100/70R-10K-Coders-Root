import React from 'react'
import ReactDOM from 'react-dom'

export const PortalDemo = () => {
  return ReactDOM.createPortal(<h2>Hello from demo portal</h2>,document.getElementById("meena"))
}
