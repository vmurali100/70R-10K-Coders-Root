import React,{ useState} from 'react'

export const Click3 = () => {
    const [count, setcount] = useState(0);

    const handleCount =()=>{        
       setcount( count+1);     
              
    }
  return (
    <div onClick={()=>{handleCount()}}>
        You have clicked for {count} times.

    </div>
  )
}
