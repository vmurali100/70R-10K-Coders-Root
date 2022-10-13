import React,{useState} from 'react'

function UsestateinRef() {
    const [refer, setrefer] = useState(null)
  return (
    <div>
        <input type={'text'} ref={refer} />
    </div>
  )
}

export default UsestateinRef