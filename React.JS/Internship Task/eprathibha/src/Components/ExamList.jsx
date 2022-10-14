import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { getexamList } from '../Store/Slice'



export const ExamList = () => {

   

    const navigate = useNavigate()
    const dispatch = useDispatch()

   

    const details = JSON.parse(localStorage.getItem("userData"))

    const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"

    const id_key = details.Id

    const token_key = details.Token

    const [examData, setexamData] = useState({
        id : id_key,
        tokenu : token_key,
        server_key : server_Key
    })

    const getExam = () => {
        const eee = dispatch(getexamList(examData))
        console.log(eee)
    }

    const examsList = JSON.parse(localStorage.getItem("exams"))

    console.log("ExamsList : ",examsList)

    console.log(typeof(examsList))

   return (
        <div className='container' style={{ background: "lightBlue" }}>

            <h2>Welcome Student</h2>
            <hr />
            <button onClick={getExam} type="button" className='btn btn-primary'>Go To Exam</button>
            {console.log(examsList)}
            {/* <Link to="/Questionslist" className="btn btn-primary" style={{ marginLeft: "20px" }}>Go to Questions page</Link> */}
            {examsList.length > 0 ? (
            <>
              {examsList.map((exam)=>{
               <div>
                    {exam["Old question papers UPSC Civils (Pre)"].map((item)=>{
                     <div>
                          {Object.values(item).map((obj)=>{
                            // return <h1 key={i}>{console.log(val)}</h1>
                           <div>
                              {Object.entries(obj).map(([a,b],i)=>{
                                return <p key={i}>{console.log(a + ":" + b)}</p>
                              })}
                           </div>
                          })}
                       </div>
                    })}
                </div>
              })}
            </>
         )
        

         : <p>{"No Data"}</p> 
        }
        </div>
    )
}
