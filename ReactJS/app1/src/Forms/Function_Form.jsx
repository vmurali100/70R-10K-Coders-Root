import React,{useState} from 'react'

export const Forms = () => {
    // const [firstName, setfirstName] = useState(""); // FOR SINGLE NAME 
    const [person, setperson] = useState({
        firstName:"",
        lastName:"" ,
        email:""
    })
   

    const handleChange=(Event)=>{
        // console.log(Event.target.value)
        // setfirstName(Event.target.value)

        var inputname = Event.target.name;
        var newPerson = {...person}
        newPerson[inputname] = Event.target.value;
        setperson(newPerson)
        // console.log(inputname);
        
    }
    const handleSubmitt=()=>{
        console.log(person)
    }

    const handleReset=()=>{
        useState={
          firstName:"",
          lastName:"" ,
          email:"" 
        }
    }
  return (
    <div>
        <form>
            <label htmlFor="firstName">First Name : </label>
            <input type="text" name="firstName" value={person.firstName} onChange={(Event)=>{handleChange(Event)}}/> <br />
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name="lastName" value={person.lastName} onChange={(Event)=>{handleChange(Event)}}/> <br />
            <label htmlFor="email">Email : </label>
            <input type="text" name="email" value={person.email} onChange={(Event)=>{handleChange(Event)}}/> <br />
            <button onClick={handleSubmitt} type="button">Add User</button>
            <button onClick={handleReset}>Reset</button>
        </form>
    </div>
  )
}
