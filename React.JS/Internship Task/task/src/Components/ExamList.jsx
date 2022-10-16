
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const ExamList = () => {

    const details = JSON.parse(localStorage.getItem("user"))

    console.log(details)

    const [exams, setExams] = useState([])

    const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"

    const id_key = details.Id

    console.log(id_key)

    const token_key = details.Token

    console.log(token_key)




    async function goToExam() {

        const response = await fetch("https://e-prathibha.com/apis/test_free_exam", {
            method: "POST",
            headers:
             {
                'id': id_key,
                "tokenu": token_key,
                "server_key": server_Key,

            }

        })

        const result = await response.json()

        console.log(result.data.exams)

        localStorage.setItem("exams", JSON.stringify(result.data.exams))

        setExams(result.data.exams)
    }

    console.log("ExamList exams : ", exams)

    console.log(typeof(exams))

    // console.log(exams[0]["Old question papers UPSC Civils (Pre)"][0].Exam)

 return (

        <div id='container' style={{ background: "lightBlue" }}>

         <h2>Welcome Student</h2>
         <hr/>
         <button onClick={goToExam} type="button" className='btn btn-primary'>Go To Exam</button>
         <Link to="/questionslist" className="btn btn-primary" style={{ marginLeft: "20px" }}>Go to Questions page</Link>
         {/* {exams.map((item)=>{
                     console.log(item)
           {Object.values(item).map((exam,i)=>{
                     console.log(exam)
               {Object.values(exam).map((res,index)=>{
                           
                return <h2 key={index}>{console.log(res.Exam.id)}</h2>
               })}
            
           })}
         })} */}

         {exams.length > 0 ? (
            <>
              {exams.map((exam)=>{
                <div>
                    {exam["Old question papers UPSC Civils (Pre)"].map((item,i)=>{
                       <div>
                          {Object.keys(item).map((res,i)=>{
                            return <h1 key={i}>{console.log(res)}</h1>
                          })}
                       </div>
                    })}
                </div>
              })}
            </>
         )
        : 

        <p>{"No Data"}</p> }         
 
         </div>
         
    )
}