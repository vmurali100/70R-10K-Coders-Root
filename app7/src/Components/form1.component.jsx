import React from "react";

const CreateUser = ({
    handleChange,
    handleSubmit,
    updateUser,
    user,
    
}) => {
  
  const {id,email,username,password} = user;
  return (
    <div>
      <form>
        <label htmlFor="">ID</label>
        <input type="text" name="id" value={id} onChange={(e)=>{handleChange(e)}} /> <br />
        <label htmlFor="">Email</label>
        <input type="text" name="email" value={email} onChange={(e)=>{handleChange(e)}} /> <br />
        <label htmlFor="">Username</label>
        <input type="text" name="username" value={username} onChange={(e)=>{handleChange(e)}}/> <br />
        <label htmlFor="">Password</label>
        <input type="text" name="password" value={password}  onChange={(e)=>{handleChange(e)}}/> <br />
        <button type="button" onClick={()=>{handleSubmit()}} >Add User</button>
        <button onClick={updateUser} type="button">Update User</button>
      </form>
    </div>
  );
};

export default CreateUser;