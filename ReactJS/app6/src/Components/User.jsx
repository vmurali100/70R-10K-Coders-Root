import React,{useState} from 'react'

export const User = () => {
  // const [firstName, setfirstName] = useState("")

  const [Person, setPerson] = useState({
    firstName:"",
    lastName:"",
  })

  const handleChange=(ele)=>{
    // console.log(ele.target.value);

    var input = ele.target.name;
    // console.log(input)
    // setfirstName(ele.target.value);
    var newPerson = {...Person};
    newPerson[input] = ele.target.value;
    setPerson(newPerson)
  }

  const handleSubmit=()=>{
    console.log(Person)
  }
  return (
    <div>
        <form>
            <label htmlFor="firstName">First Name : </label>
            <input type="text" name="firstName" value={Person.firstName} onChange={(ele)=>{handleChange(ele)}} /> <br />
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name="lastName" value={Person.lastName} onChange={(ele)=>{handleChange(ele)}} /> <br />
            <button type='button' onClick={handleSubmit}>Add User</button>
        </form>
    </div>
  )
}
