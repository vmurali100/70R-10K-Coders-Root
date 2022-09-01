import React,{useState} from 'react'

export const User1 = () => {
    const [Person, setPerson] = useState({
      firstName:"",
      lastName:"",
    });

   const handlePerson=(e)=>{
    var input = e.target.name;
    console.log(input)
    setPerson(e.target.value);
    var newPerson= {...Person};
    newPerson[input] = e.target.value;
    setPerson(newPerson); 
   }

   const handleSubmit=()=>{
    console.log(Person)
  }

  return (
    <div>
     <form>
       <label htmlFor="firstName"> FirstName : </label>
       <input type="text" name="firstName" value={Person.firstName} onChange={(e)=>{handlePerson(e)}}/> <br />
       <label htmlFor="lastName">LastName : </label>
       <input type="text" name="lastName" value={Person.lastName}  onChange={(e)=>{handlePerson(e)}}/> <br />
       <button type="button" onClick={handleSubmit}>Add User</button>

     </form>
    </div>
  )
}
