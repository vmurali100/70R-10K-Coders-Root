import React,{useState, useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const ParentComponent = () => {
    const [age, setage] = useState(25);
    const [salary, setsalary] = useState(50000)

    const incrAge=useCallback(()=>{
      setage(age+1)
  },[age])
   
    const inceSal=useCallback(()=>{
      setsalary(salary+1000)
  },[salary])
    
  return (
    <div>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleClick={incrAge}>Increment Age</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={inceSal}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent;