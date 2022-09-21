import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setuser] = useState({
    albumId: "",
    id: "",
    title: "",
    url: "",
    thumbnailUrl: ""
  });

  useEffect(() => {
    getDataFromServer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4002/user/${id}`, user);
    navigate("/Users");
  };

  const getDataFromServer = () => {
    axios.get(`http://localhost:4002/user/${id}`).then((response) => {
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
    let url = "http://localhost:4002/user/";
    axios.put(url + user.id, user).then(() => {
      console.log("updated");
      navigate("/Users");
      alert("User Updated successfully");
      getDataFromServer();
      clearForm();
    });
  };
  const clearForm = () => {
    setuser({
      albumId: "",
    id: "",
    title: "",
    url: "",
    thumbnailUrl: ""
    });
  };

  const { albumId,title,url,thumbnailUrl} =
    user;

  return (
    <div>
      

      <div className="p-3 mb-2 bg-secondary text-white">
      <div className="w-75 mx-auto shadow p-5">
        <h1>Update Form</h1>

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
          Album Id
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="albumId"
          value={albumId}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
         Title
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="title"
          value={title}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Url
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="url"
          value={url}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      {/* <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Thumbnail Url
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="thumbnailUrl"
          value={user.thumbnailUrl}
          onChange={(e) => {
            handlechangeEvent(e);
          }}
        />
      </div> */}
      <div  className="form-group">
            <label htmlFor=" " className="col-form-label" >
            Thumbnail Url
            </label>
            <input
              type="file"
             
              className="form-control form-control-lg"
              name="thumbnailUrl"
            
              accept="image/png,image/jpeg"
              
              onChange={(e) => {
                handleChange(e);
              }} 
            /><img style={{ width: 60, height: 60 }} src={thumbnailUrl} />
           
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
