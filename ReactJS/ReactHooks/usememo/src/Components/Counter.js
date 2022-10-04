import React,{useMemo, useState} from 'react'

const Counter = () => {
    const [counterOne, setcounterOne] = useState(0);
    const [counterTwo, setcounterTwo] = useState(0);

    const increOne=()=>{
        setcounterOne(counterOne+1)
    }

    const increTwo=()=>{
        setcounterTwo(counterTwo+1)
    }

    //when you want to optimize the the cacahe of a function we use useMemo

    const isEven=useMemo(()=>{
        let i=0;
        while(i<2000000000) i++
        return counterOne % 2 == 0;
    },[counterOne])

    
  return (
    <div>

    <div>
        <button type='button' onClick={increOne}>Count One- {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
    </div>
    <div>
        <button type='button' onClick={increTwo}>Count Two- {counterTwo}</button>
    </div>

    </div>
  )
}

export default Counter