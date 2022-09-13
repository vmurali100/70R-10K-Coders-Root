import React,{useState} from 'react'
import { HOCcomp2 } from './HOCcomp2';
import Hover2 from './Hover2';

 const Click2 = (props) => {
    // const [count, setcount] = useState(0);
    // const handleCount =()=>{
    //     setcount(count+1);
    // }
  return (
    <div>
        <p onClick={()=>{props.handleCount()}}>You have clicked on this content for {props.count} times.</p>
        {/* <Hover2  count={count} handleCount={handleCount}/> */}
    </div>
  )
  
}

export default HOCcomp2(Click2) ;