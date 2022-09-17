import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [commentinfo, setcommentinfo] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    const comments =JSON.parse(localStorage.getItem("comments"))
     const comment=comments.find((std)=>std.id==urlObj.id)//
     console.log(comments)
    setcommentinfo(comment)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(commentinfo).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{commentinfo.id}</h5>


          

          <p className="card-text">
          {commentinfo.postId}
          </p>
          <p className="card-text">
          {commentinfo.name}
          </p>
          <p className="card-text">
          {commentinfo.email}
          </p>

          <p className="card-text">
          {commentinfo.body}
          </p>
          
          <Link className="btn btn-primary" to ="/">Go To Comments</Link>
          <a href="a" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

