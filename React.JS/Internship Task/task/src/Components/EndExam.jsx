import React from 'react'

export const EndExam = () => {

    const handleEnd = () => {
        alert("Are you sure to end the exam")
        if("yes"){
            
        }
    }
  return (
    <div id="container">
        <button type="button" className='btn btn-primary' onClick={handleEnd}>End Exam</button>
    </div>
  )
}
