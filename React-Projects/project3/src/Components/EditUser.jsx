import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setuser] = useState({
    id:"",
    regno:"",
    university: "",
    institute: "",
    branch: "",
    degree: "",
    avgcgpa: "",
    experience: "",
    blog: ""
    
  });

  useEffect(() => {
    getDataFromServer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/user/${id}`, user);
    navigate("/Students");
  };

  const getDataFromServer = () => {
    axios.get(`http://localhost:4000/user/${id}`).then((response) => {
      console.log(response);
      setuser(response.data);
    });
  };
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };

  const updateUser = () => {
    let url = "http://localhost:4000/user/";
    axios.put(url + user.id, user).then(() => {
      console.log("updated");
      navigate("/Students");
      alert("User Updated successfully");
      getDataFromServer();
      clearForm();
    });
  };
  const clearForm = () => {
    setuser({
        id:"",
        regno:"",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        avgcgpa: "",
        experience: "",
        blog: ""
        
    });
  };

  const {  regno, university, institute, branch,degree,avgcgpa,experience,blog }= user;

  return (
    <div>
      

      <div className="p-3 mb-2 bg-secondary text-white">
      <div className="w-75 mx-auto shadow p-5">
        <h1>User Update Form</h1>

        <hr />
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="" className="col-form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="id"
              value={id}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Registration Number
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="regno"
              value={regno}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            University
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder=""
              name="university"
              value={university}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Institute
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="institute"
              value={institute}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Branch
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="branch"
              value={branch}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Degree
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="degree"
              value={degree}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

         
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Average CGPA
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="avgcgpa"
              value={avgcgpa}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Experience
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="experience"
              value={experience}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Website/Blog
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="blog"
              value={blog}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <br />
          <button
            onClick={updateUser}
            type="button"
            className="btn btn-primary"
          >
            Update User
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};
