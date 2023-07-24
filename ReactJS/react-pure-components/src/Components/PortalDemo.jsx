import React from 'react'
import ReactDOM from 'react-dom'

export const PortalDemo = () => {
    // return <h2>Hello from Portal Demo</h2>
  return ReactDOM.createPortal( <h2>Hello From Portal Demo</h2>,document.getElementById("murali") )
}
