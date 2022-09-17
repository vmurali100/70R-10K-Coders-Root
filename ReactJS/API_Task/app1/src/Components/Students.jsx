import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";

export const Students = () => {


  let url = "http://localhost:3004/carts/";

  const [student, setstudent] = useState([])

  useEffect(() => {
    axios.get(url).then((res) => {
      localStorage.setItem("users", JSON.stringify(res.data))
      setstudent(res.data)
    })
  }, [])

  return (
    <div className="container">

      <hr />
      <hr />

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {student.map((chn, i) => {

            return <tr key={i}>
              <td>{chn.id}</td>
              <td>{chn.userId}</td>
              <td>{chn.date}</td>
              {/* <td><button type="button" className="btn btn-primary">Details</button></td> */}
              <td>
                <Link to={`/edit/${chn.id}`} className="btn btn-warning">Edit</Link>
              </td>
              <td>
                <Link to={`/delete/${chn.id}`} className="btn btn-danger">Delete</Link>
              </td>
              <td>
                <Link to={`/details${chn.id}`} className="btn btn-primary">Details</Link>
              </td>
            </tr>
          }
          )}

        </tbody>
      </table>
    </div>
  );
};