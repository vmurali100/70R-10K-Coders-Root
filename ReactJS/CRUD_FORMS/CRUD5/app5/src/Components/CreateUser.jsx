import React,{useState} from 'react'

export const CreateUser = () => {
    const [user, setuser] = useState({username:"",password:"",emailaddress:"",dateofbirth:"",height:"",weight:""})
    //created an (user)object
        
    
    const [users, setusers] = useState([]);//created an (users) empty array
    const [index, setindex] = useState(0)


    const handleChange=(e)=>{
        let newUser ={...user};//creating copy of an object
        newUser[e.target.name]= e.target.value;//name:will know what we are typing ex:username,email,username,password
        setuser(newUser)
    };

    const handleSubmit=()=>{
        console.log(user)
        let newUsers=[...users]
        newUsers.push(user)
        setusers(newUsers)//use todisplay the data one by one.
        clearForm()
    };
    const clearForm=()=>{
        setuser({username:"",password:"",emailaddress:"",dateofbirth:"",height:"",weight:""})

    }
    const deleteUser=(username)=>{
        let newUsers=users.filter((myUser)=>myUser.username !=username);
    setusers(newUsers)
    }
    const handleEdit=(myUser,i)=>{
        setuser(myUser);
        setindex(i)//i is saved in indexvalue

    }

    const updateUser=()=>{
        let newUsers =[...users];
        newUsers[index]=user;//index:what ever row we are clicking it will save in another button.
        setusers(newUsers)
        clearForm()
    }
    

    

    const{username,dateofbirth,height,weight,emailaddress,password}= user;
  return (
    <div>
        <form >
        <label htmlFor="username">Username :</label>
           <input type="text" name="username"value={username} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password"value={password} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="emailaddress">Email Address :</label>
           <input type="text" name="emailaddress"value={emailaddress} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="dateofbirth">Date of Birth:</label> 
            <input type="text" name="dateofbirth" value={dateofbirth} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="height">Height :</label> 
            <input type="text" name="height" value={height} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="weight">Weight:</label> 
            <input type="text" name="weight" value={weight} onChange={(e)=>{handleChange(e)}} /><br/>
            <button type='button' onClick={handleSubmit}>AddUser</button>
            <button type="button"onClick={updateUser} >Update User</button>
        </form>
        <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th >Username</th>
            <th >Email Address</th>
            <th >Password</th>
            <th >Date of Birth</th>
            <th >Height</th>
            <th >Weight</th>
            <th> Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {users.map((user,i)=>{//to display
            return <tr key={i}>
              <td>{user.username}</td>
              <td>{user.emailaddress}</td>
              <td>{user.password}</td>
              <td>{user.dateofbirth}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td><button className="btn btn-warning" onClick={()=>{handleEdit(user,i)}}>Edit</button></td>
              <td><button className="btn btn-danger" onClick={()=>{deleteUser(user.username)}}>Delete </button></td>
            </tr>
          })}
          
        </tbody>
      </table>

        </div>
  );
};

  