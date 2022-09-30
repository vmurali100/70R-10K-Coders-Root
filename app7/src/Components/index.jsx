import React, { Fragment, } from 'react';
// import { useEffect } from 'react';
import CreateUser from './form1.component';
import StudentsData from './students.data.component';
import axios from 'axios';


const Index = () => {
    const [createFrom, setCreateForm] = React.useState(true);
    const [showUsers, setShowUsers] = React.useState(false);
    const [index, setindex] = React.useState(0);
    const [users, setusers] = React.useState([]);
    const [showEdit, setShowEdit] = React.useState(false);
    const [user, setuser] = React.useState({
        id: "",
        email: "",
        username: "",
        password: "",
    });
   
    const back = () => {
        setShowUsers(false);
        setCreateForm(true);
    }

    const submitStudent =()=>{
      axios.post("http://localhost:3000/user", user).then(()=>{
        setCreateForm(false);
        setShowUsers(true);
      });
  }

    const handleSubmit=()=>{
        console.log(user)
        let newUsers = [...users]
        newUsers.push(user)
        setusers(newUsers)
        submitStudent();
        clearForm();
      };

      const clearForm=()=>{
        setuser({
          id: "",
          email: "",
          username: "",
          password: "",
        })
      }
    const handleChange=(e)=>{
        let newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setuser(newUser)
      };

      const updateUser=()=>{
        let newUsers = [...users];
        newUsers[index] = user;
        setusers(newUsers);
        clearForm();
      }

      const deleteUser=(id)=>{
        let newUsers = users.filter((myUser)=>myUser.id !==id);
        setusers(newUsers)
      }
    
      const handleEdit=(myUser,i)=>{
        setuser(myUser);
        setindex(i);
        setShowEdit(true);
      }

      const setUsers = (myUsers) => {
        setUsers(myUsers)
      } 
      

    return(
        <Fragment>
            {
                createFrom && <CreateUser updateUser={updateUser} handleSubmit={handleSubmit} handleChange={handleChange} users={users} user={user}></CreateUser>
            }

            {
                showUsers && 
                <StudentsData 
                users={users} 
                handleEdit={handleEdit} 
                deleteUser={deleteUser} 
                back={back} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                user={user} 
                updateUser={updateUser} 
                showEdit={showEdit} 
                setusers={setUsers}
                >
                </StudentsData>
            }
            
        </Fragment>
    )

}


export default Index;