import React, { useState } from "react";

export const Form3crud = () => {
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
  const [index, setindex] = useState(0);

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };
  const handleSubmit = () => {
    console.log(user);
    let newUsers = [...users];
    newUsers.push(user);
    setusers(newUsers);
    clearForm();
  };

  const clearForm = () => {
    setuser({
      university: "",
      institute: "",
      branch: "",
      degree: "",
      avgcgpa: "",
      experience: "",
      blog: "",
    });
  };

  const deleteUser = (blog) => {
    let newUsers = users.filter((myUser) => myUser.blog !== blog);
    setusers(newUsers);
  };

  const handleEdit = (myUser, i) => {
    setuser(myUser);
    setindex(i);
  };

  const updateUser = () => {
    let newUsers = [...users];
    newUsers[index] = user;
    setusers(newUsers);
    clearForm();
  };
  const { university, institute, branch, degree, avgcgpa, experience, blog } =
    user;
  return (
    <div class="p-3 mb-2 bg-success text-white">
      <h1>Registration Details</h1>
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
          type="button"
          class="btn btn-info"
          onClick={() => {
            handleSubmit();
          }}
        >
          Add User
        </button>
        <button onClick={updateUser} type="button" class="btn btn-primary">
          Update User
        </button>
        <hr />
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
                      handleEdit(user, i);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user.blog);
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
  );
};
