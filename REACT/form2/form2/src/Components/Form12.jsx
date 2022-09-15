import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";


export const Form12 = () => {
    const [user, setuser] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
    
        rating: [
          {
            rate: "",
            count: "",
          },
        ],
      });
      const [users, setusers] = useState([]);
      let url = "http://localhost:3001/user/";
      useEffect(() => {
        getDataFromServer();
      }, []);
      const getDataFromServer = () => {
        axios.get(url).then((response) => {
          console.log(response);
          setusers(response.data);
        });
      };
      const handleChange = (e) => {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setuser(newUser);
      };
      const addUser = () => {
        let url = "http://localhost:3001/user/";
        axios.post(url, user).then(() => {
          console.log("user added successfully");
          clearForm();
          getDataFromServer();
        });
      };
      const clearForm = () => {
        setuser({
            id: "",
            title: "",
            price: "",
            description: "",
            category: "",
            image: "",
        
            rating: [
              {
                rate: "",
                count: "",
              },
            ],
        });
      };
      const deleteUser = (id) => {
        axios.delete(url + id).then(() => {
          console.log("user deleted asuccessfully");
          getDataFromServer();
        });
      };
      const handleEdit = (user) => {
        setuser(user)
    //    alert(id)
        // setuser(user);
      };
    
      const updateUser = () => {
        axios.put(url + user.id, user).then(() => {
          console.log("updated");
          getDataFromServer();
          clearForm();
        });
      };
const onSubmit =((e)=>{
  e.preventDefault()

})



    const { id, title, price, description, category, image, rating,rate,count } =
    user;
  return (
    <div className="p-3 mb-2 bg-secondary text-white"><h1>Products List</h1>
    <hr />

    <form  onSubmit={onSubmit}>
     
      <label htmlFor="">ID:</label>
      <input type="text" id="id" name="id" value={id} onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Title:</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Price:</label>
      <input
        type="text"
        name="price"
        value={price}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
     
      <label htmlFor="textarea">Description :</label>
      <textarea name="description" value={description} cols="30" rows="2" onChange={(e) => {
          handleChange(e);
        }}></textarea>{" "}
      <br />
      <label htmlFor="">Category: </label>
      <input
        type="text"
        name="category"
        value={category}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Image: </label>
      <input
        type="file"
        name="image"
        accept="image/*"
        value={image}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <img style={{width:100,height:100}} src={"http://localhost:3001/user/"+user.image}/>
      <br />
      <br />
      
        <label htmlFor="rate">Rate:</label>
        <input
        type="text"
        name="rating.rate"
        value={rate}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      
        <label htmlFor="count">Count:</label>
        <input
        type="text"
        name="rating.count"
        value={count}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      
      
      <br />
      <button
          onClick={addUser}
          type="button"
          style={{ color: "yellow", background: "black" }}
        >
          Add User
        </button>
        <button
          onClick={updateUser}
          type="button"
          style={{ color: "black", background: "orange" }}
        >
          Update User
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Rate</th>
            <th scope="col">Count</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.price}</td>
                <td>{user.description}</td>
                <td>{user.category}</td>
                <td><img style={{width:100,height:100}} src={user.image}/></td>
                <td>{user.rating.rate}</td>
                <td>{user.rating.count}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      handleEdit(user);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
  )
}