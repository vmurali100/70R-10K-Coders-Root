import React,{useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';
export const Form7crud = () => {
    const [user, setuser] = useState({
        id: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
      });
      const [users, setusers] = useState([]);
      let url ="https://filltext.com/?rows=5&id={index}&street={streetAddress}&city={city}&state={usState}&zipcode={zip}&country={country}&pretty=true/"
  
      useEffect(()=>{
getDataFromServer()
      },[])
      const getDataFromServer = () => {
        axios.get(url).then((response) => {
          console.log(response);
          setusers(response.data);
        });
      };
      const handleChange=(e)=>{
        let newUser ={ ...user }
        newUser[e.target.name] = e.target.value;
        setuser(newUser)
      }
      const addUser=()=>{
        axios.post(url,user).then(()=>{
            console.log("user added successfully");
      clearForm();
      getDataFromServer();
        })
      }
      const clearForm = () => {
        setuser({
            id: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            country: ""
        });
      };
      const deleteUser = (street) => {
        axios.delete(url + street).then(() => {
          console.log("user deleted successfully");
          getDataFromServer();
        });
      };
      const handleEdit = (user) => {
        setuser(user);
      };
      const updateUser = () => {
        axios.put(url + user.id, user).then(() => {
          console.log("updated");
          getDataFromServer();
          clearForm();
        });
      };
      const { id, street, city, state, zipcode, country } = user;
      return (
    <div>
        <h1>Address</h1>
      <hr />
      <form>
        <label htmlFor="">ID: </label>
        <input
          type="text"
          name="id"
          value={id}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Street:</label>
        <input
          type="text"
          name="street"
          value={street}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <input
          type="text"
          name="street"
          value={street}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">State: </label>
        <input
          type="text"
          name="state"
          value={state}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Zip code: </label>
        <input
          type="text"
          name="zipcode"
          value={zipcode}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Country: </label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
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
        <hr />
        </form>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Street</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip code</th>
            <th scope="col">Country</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.street}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.zipcode}</td>
                <td>{user.country}</td>
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
                      deleteUser(user.street);
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
