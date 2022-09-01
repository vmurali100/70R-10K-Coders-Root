import React,{useState} from 'react'

export const User2 = () => {
    const [Person, setPerson] = useState({
        firstName:"",
        lastName:"",
    })

    const handlePerson=(e)=>{
        var input= e.target.name;
        setPerson(e.target.value);
        var newPerson = {...Person};
        newPerson[input] = e.target.value;
        setPerson(newPerson);

    }

    const handleSubmit=(e)=>{
        console.log(Person);
    }

  return (
    <div>
        <form action="">
            <label htmlFor="">FirstName : </label>
            <input type="text" name="firstName" value={Person.firstName} onChange={(e)=>{handlePerson(e)}} /> <br />
            <label htmlFor="">LastName : </label>
            <input type="text" name="lastName" value={Person.lastName} onChange={(e)=>{handlePerson(e)}} /><br />
            <button type='button' onClick={handleSubmit}>Add User</button>
        </form>
    </div>
  )
}
