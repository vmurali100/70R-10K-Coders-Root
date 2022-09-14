import axios from "axios";
import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";

export const CreateStudent = () => {
    const [student, setstudent] = useState({
        id:11,
        name:"sam",
        username:"sammm",
        email:"sam@gmail.com"
    })
    const navigate = useNavigate();

    const submitStudent =()=>{
        axios.post("http://localhost:4000/students",student).then(()=>{
            navigate("/")
        })
    }

  return (
    <div className="container">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="button" class="btn btn-primary" onClick={submitStudent}>
          Submit
        </button>
      </form>
    </div>
  );
};
