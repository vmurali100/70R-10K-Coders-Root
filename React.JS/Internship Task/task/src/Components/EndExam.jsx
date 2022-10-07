import React from 'react'
import { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

export const EndExam = () => {

    const navigate = useNavigate()

    const details = JSON.parse(localStorage.getItem("user"))

    const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"

    const id_key = details.data.Id

    const token_key = details.data.Token

     useEffect(()=>{
        alert("Are you sure to stop and exit the examination?")
        fetch(" https://e-prathibha.com/apis/finishExam",{
            method : "POST",
            headers: {

                'id': id_key,
                "tokenu": token_key,
                "server_key": server_Key,

            }
        })
   },[])

  return (
    <div id="container">

    </div>
  )
}
