import React,{useState} from 'react'

export const Calculator = () => {
    const [input, setinput] = useState(" ")//to store the values which we are typing.
    const handleChange=(e)=>{
        // let newUsers={...input}
        // newUsers[e.target.name]=e.target.value
        // setinput(newUsers) 
        setinput(e.target.value);
   }
const [result, setresult] = useState(0) ;//to store the result value./*eval: to evaluate given expressions*/   
  return (
    <div>
        <input type="text" value={input} name="input" onChange={handleChange}/> <br/>
        <button onClick={()=>setresult(eval(input))}>Result</button>
        <h4>Result is: {result}</h4>

        <button onClick={()=>setinput(input+'1')}>1</button>
        <button onClick={()=>setinput(input+'2')}>2</button>
        <button onClick={()=>setinput(input+'3')}>3</button>
        <button onClick={()=>setinput(input+'4')}>4</button>
        <button onClick={()=>setinput(input+'5')}>5</button> <br/>

        <button onClick={()=>setinput(input+'6')}>6</button>
        <button onClick={()=>setinput(input+'7')}>7</button>
        <button onClick={()=>setinput(input+'8')}>8</button>
        <button onClick={()=>setinput(input+'9')}>9</button>
        <button onClick={()=>setinput(input+'0')}>0</button><br/>

        <button onClick={()=>setinput(input+'+')}>+</button>
        <button onClick={()=>setinput(input+'-')}>-</button>
        <button onClick={()=>setinput(input+'*')}>*</button>
        <button onClick={()=>setinput(input+'/')}>/</button>
        <button onClick={()=>setinput('')}>clr</button>


    </div>
  )
}
