import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const SubjectDetails = () => {
  const [subjectinfo, setsubjectinfo] = useState({});

  const urlObj = useParams(); //the data present in urlbased on fname it displays it reads the data.
  useEffect(() => {
    // console.log(urlObj);
    // const url = "http://filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true/";
    // axios.get(url + urlObj.fname).then((res) => {
    //   //$:template literals`:back tick,used toadd multiline
    //   console.log(res.data);
    //   setsubjectinfo(res.data)
    // });
    const subjects =JSON.parse(localStorage.getItem("Subjects"))
     const subject=subjects.find((sub)=>sub.id==urlObj.id)//==:value matches;===value and data type
     console.log(subjects)
    setsubjectinfo(subject)


  
  }, []);
  return (


    <div className="container">
                {Object.keys(subjectinfo).length>0&&

      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{subjectinfo.fname}</h5>

          

          <p className="card-text">
          {subjectinfo.lname}
          </p>

          <p className="card-text">
          {subjectinfo.tel}
          </p>

          <p className="card-text">
          {subjectinfo.address}
          </p>
          <p className="card-text">
          {subjectinfo.city}
          </p>
          <p className="card-text">
          {subjectinfo.state}
          </p>
          <p className="card-text">
          {subjectinfo.zip}
          </p>
          
          
          <Link className="btn btn-primary" to ="/Subjects">Go To Subjects</Link>
          <a href="#" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

