import React from 'react'
import { useParams } from 'react-router-dom'

export const TeachersDetails = () => {
    let teachersDetails = useParams()
    console.log(teachersDetails)
  return (
    <div>TeachersDetails</div>
  )
}
