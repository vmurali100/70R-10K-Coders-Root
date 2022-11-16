import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userfreeexam } from '../Store/userSlice'
import { useState } from 'react'

const ListFreeExams = () => {

  const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"
  const Token = localStorage.getItem("Token")
  const Id = localStorage.getItem("Id")

  const [freeexam, setFreeexam] = useState({
    Id: Id,
    tokenu: Token,
    server_Key: server_Key
  })
  const dispatch = useDispatch()
  //   const handleFreeExams = async () => {
  //       const list= await dispatch(userfreeexam(freeexam))  
  //       if(list.payload.status===200){       
  //       }      
  //  } 
  const free_exams_list = useSelector(state => state.FreeExamReducer.freeexamslist.exams)
  console.log(free_exams_list)
  const examdata = JSON.parse(localStorage.getItem("examslist"))
  return (
    <div>

      {examdata.map((item, i) => {
        return <div key={i}>
          {Object.entries(item).map((item1, value) => {
            console.log(item1, value)
            return <div> {item1.map((a, b) => {
              console.log(a, b)
              {
                if (Array.isArray(a)) {
                  console.log(a)
                  return <div> {a.map((x, y) => {
                    console.log(typeof (x))
                    console.log(x.Exam.id)
                    return <div> {Object.entries(x).map(([c, d], index) => {
                      console.log([c, d])

                      if (c === "Exam") {
                        console.log(d)
                        return <div>
                          {Object.entries(d).map(([e,f],i)=>{
                            if (e==="id"){
                              return <div>
                            <p key={i}>{e+":"+f}</p>
                            <button className='btn btn-primary'>Get Questions for this Id</button>
                            <hr />
                            </div>
                            }
                            
                          })}
                        </div>
                      }
                    })
                    }</div>
                  })
                  }</div>
                }
              }
          })
          }</div>
      })}

    </div>
      })}
    </div >
  )
}

export default ListFreeExams