import React,{useState} from 'react'
import { useEffect } from "react";
import axios from "axios";
export const Form8crud = () => {
    const [user, setuser] = useState({
        university: "",
        institute: "",
        branch: "",
        degree: "",
        avgcgpa: "",
        experience: "",
        blog: "",
      });
      const [users, setusers] = useState([]);
      let url = "http://localhost:3000/user/";
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
        let url = "http://localhost:3000/user/";
        axios.post(url, user).then(() => {
          console.log("user added successfully");
          clearForm();
          getDataFromServer();
        });
      };
      const clearForm = () => {
        setuser({
            university: "",
            institute: "",
            branch: "",
            degree: "",
            avgcgpa: "",
            experience: "",
            blog: ""
        });
      };
      const deleteUser = (id) => {
        axios.delete(url + id).then(() => {
          console.log("user deleted asuccessfully");
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
      const { university, institute, branch, degree, avgcgpa, experience, blog } =
      user;
  return (
    <div><h1>Registration Details</h1>
    <hr />

    <form>
      <label htmlFor="">University: </label>
      <input
        type="text"
        name="university"
        value={university}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Institute:</label>
      <input
        type="text"
        name="institute"
        value={institute}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Branch:</label>
      <input
        type="text"
        name="branch"
        value={branch}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Degree: </label>
      <input
        type="text"
        name="degree"
        value={degree}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Average CGPA: </label>
      <input
        type="text"
        name="avgcgpa"
        value={avgcgpa}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Experience: </label>
      <input
        type="text"
        name="experience"
        value={experience}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <br />
      <label htmlFor="">Your Website Or Blog: </label>
      <input
        type="text"
        name="blog"
        value={blog}
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
            <th scope="col">university</th>
            <th scope="col">institute</th>
            <th scope="col">branch</th>
            <th scope="col">degree</th>
            <th scope="col">avgcgpa</th>
            <th scope="col">experience</th>
            <th scope="col">Your Website Or Blog</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.university}</td>
                <td>{user.institute}</td>
                <td>{user.branch}</td>
                <td>{user.degree}</td>
                <td>{user.avgcgpa}</td>
                <td>{user.experience}</td>
                <td>{user.blog}</td>
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
