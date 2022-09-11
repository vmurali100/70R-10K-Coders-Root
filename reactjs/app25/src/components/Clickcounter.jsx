import React,{useState} from 'react'
import { HOCcomp } from './HOCcomp'

 const Clickcounter = (props) => {
    console.log(props)
    // const [count, setcount] = useState(0)

    // const handlecount=()=>{
    //     setcount(count+1)
    // }
  return (
    <div>
        <h1>Clickedcounter {props.count} times</h1>
        <button type='button' onClick={props.handlecount}>clickme</button>

        </div>
  )
}

export default HOCcomp(Clickcounter)
