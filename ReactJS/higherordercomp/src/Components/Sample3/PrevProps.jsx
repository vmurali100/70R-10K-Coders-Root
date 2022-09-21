import React,{useState} from 'react'

export const PrevProps = () => {
    const [count, setcount] = useState(intialCount);
    const intialCount =0;

    const increment =()=>{
        for (let i =0 ;i<5; i++){
            setcount(prevcount=> prevcount+1)
        }
    }//function hook counter from codev tut 3
  return (
    <div>
        <button onClick={()=> setcount({intialCount})}>Reset</button>
        <button onClick={()=> setcount({intialCount})}>Reset</button>
    </div>
  )
}
