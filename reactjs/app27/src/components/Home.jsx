import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export const Home = () => {
    return (
        <div>
            <h1>welcome to Home component  </h1>
            <section>
                <Outlet/>
            </section>
        </div>
    )
}
