import React, { useState } from 'react'

export const Hover = ({count,handlecount}) => {
    
    return (
        <div >
     
<h2 onMouseOver={handlecount}>you have Hovered {count} times</h2>
        </div>
    )
}
