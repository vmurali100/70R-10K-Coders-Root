import React,{useState} from 'react'

export const CreateUser = () => {
    const [user, setuser] = useState({//created an (user)object
        "id": "",
        "email": "",
        "username": "",
        "password": "",
    })
    const [users, setusers] = useState([]);//created an (users) empty array


    const handleChange=(e)=>{
        let newUser ={...user};//creating copy of an object
        newUser[e.target.name]= e.target.value;//name:will know what we are typing ex:id,email,username,password
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
        setuser({"id": "",
        "email": "",
        "username": "",
        "password": "",})
    }
    const deleteUser=(id)=>{
        let newUsers=users.filter((user)=>user.id !=id);
    setusers(newUsers)

    }

    //destructuring:dividing from large in to small components.
    //ex: {fname:"ker",lname:"pra"},person.lname="pra"
    //const{fname,lname}=person.
    //fname=person;here user.id=id

    const{id,username,email,password}= user;
  return (
    <div>
        <form >
            <label htmlFor="">ID</label>
            <input type="text" name='id' value={id} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Email</label>
            <input type="text" name='email' value={email} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Username</label>
            <input type="text" name='username' value={username} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Password</label>
            <input type="text" name='password' value={password} onChange={(e)=>{handleChange(e)}}/><br/>
            <button type='button' onClick={handleSubmit}>AddUser</button>
        </form>
        <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th >ID</th>
            <th >Username</th>
            <th >Email</th>
            <th >Password</th>
            <th> Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {users.map((user,i)=>{//to display
            return <tr key={i}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>

              <td><button className="btn btn-warning">Edit</button></td>
              <td><button className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete </button></td>
            </tr>
          })}
          
        </tbody>
      </table>

        </div>
  );
};

  