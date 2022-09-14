import React from 'react'
import { ContextConsumer } from './Usercontext'


export const User = ({ msg }) => {
    return (
        <div>

            <p><b> User component</b></p>

            <p><b>msg from main component :  {msg}</b></p>
            <ContextConsumer>
                {(val)=>{
                    console.log(val)
                }}
            </ContextConsumer>

            

        </div>
    )
}
