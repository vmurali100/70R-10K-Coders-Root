import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export function Find() {
  const [search, setsearch] = useState();
  const [data, setdata] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const result = await axios.get(`http://localhost:4003/user?q=${search}`);
  //     console.table(result.data);
  //     setdata(result.data);
  //   };
  //   fetchUsers();
  // }, [search]);
    const searchHandle =async (event)=>{
  let search =event.target.value;
  let result = await fetch(`http://localhost:4003/user?q=${search}`)
  result =await result.json()
  if(result){
  setdata(result)
  }
    }
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="enter search"
        // onChange={(e) => setsearch(e.target.value)}
        onChange={searchHandle}
      />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Id</th>
            <th>Title</th>

            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((search, i) => (
            <tr key={i}>
              <td>{search.id}</td>
              <td>{search.userId}</td>
              <td>{search.title}</td>

              <td>{search.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Find;
