/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
//  import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const StudentDetails = () => {
  const [studentinfo, setstudentinfo] = useState({});

  const urlObj = useParams();
  useEffect(() => {
    //  console.log(urlObj);
    //  const url = "http://localhost:3000/Students/";
    //  axios.get(url + urlObj.id).then((res) => {
    //    //$:template literals`:back tick,used toadd multiline
    //    console.log(res.data);
    //    setstudentinfo(res.data)
    //  });
    const students = JSON.parse(localStorage.getItem("Students"));
    const student = students.find((std) => std.id == urlObj.id); // "==" : value matches;"===" : value and data type matches
    console.log(students);
    setstudentinfo(student);
  }, []);
  return (
    <div className="container">
      {Object.keys(studentinfo).length > 0 && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{studentinfo.name}</h5>

            <p>
              <b>Address</b>
            </p>

            <p className="card-text">Steet:{studentinfo.address.street}</p>

            <p className="card-text">Suite:{studentinfo.address.suite}</p>

            <p className="card-text">Zipcode:{studentinfo.address.zipcode}</p>
            <p>
              <b>Company Details</b>
            </p>
            <p className="card-text">Name:{studentinfo.company.name}</p>
            <p className="card-text">
              Catchphrase:{studentinfo.company.catchphrase}
            </p>
            <p className="card-text">Bs:{studentinfo.company.bs}</p>

            <p className="card-text">Email:{studentinfo.email}</p>
            <p className="card-text">Id:{studentinfo.id}</p>
            <p className="card-text">Name:{studentinfo.name}</p>
            <p className="card-text">Phone:{studentinfo.phone}</p>
            <p className="card-text">Username:{studentinfo.username}</p>

            <p className="card-text">Website:{studentinfo.website}</p>

            <Link className="btn btn-primary" to="/">
              Go To Students
            </Link>
            <a href="#"></a>
          </div>
        </div>
      )}
    </div>
  );
};
