import React,{useState} from 'react';

export const User = () => {
    //const [firstName, setfirstName] = useState("")//to declare variable,to pass additional funct. need to place arrow functn
    const [person, setperson] = useState({firstName:"",lastName:"",email:""})

     const handleChange=(e)=>{//synthetic element
        console.log(e.target.value)//to read element
        var inputname =e.target.name
        var newperson ={...person}//creating an copy of object
        newperson[inputname]=e.target.value
        setperson(newperson)
        console.log(inputname)

        //setfirstName(e.target.value)//to update,used for inputfield 1
     }
        const handleSubmit=()=>{
            console.log(person)
        }

     
  return (
    <div>
       <form>
           <label htmlFor='firstName'>First Name:</label>
           <input type="text" name="firstName" value={person.firstName} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="lastName">Last Name:</label>
           <input type="text" name="lastName"value={person.lastName} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="email">Email:</label>
           <input type="text" name="email"value={person.email} onChange={(e)=>{handleChange(e)}}/> <br/>
           <button onClick={handleSubmit} type="button">Add User</button>
       </form>
    </div>
  )
}

