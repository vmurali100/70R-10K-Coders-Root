import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const Userfunc = () => {

    useEffect(() => {                                           //useeffect=component didmount in class
        getallusers()
    }, [])

    const getallusers = () => {
        let url = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
        axios.get(url).then((res) => {
            console.log(res)
        })
    }
    return (
        <div><h1>Userfunc</h1></div>
    )
}
