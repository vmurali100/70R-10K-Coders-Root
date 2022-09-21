import React from "react";

import { useState } from "react";
export function Find() {
  const [search, setsearch] = useState();
  const [data, setdata] = useState([]);

  const searchHandle = async (event) => {
    let search = event.target.value;
    let result = await fetch(`http://localhost:4000/user?q=${search}`);
    result = await result.json();
    if (result) {
      setdata(result);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="enter search"
        onChange={searchHandle}
      />
      <table className="table">
        <thead>
          <tr>
          <th>ID</th>
          <th>Profile</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((search, i) => (
            <tr key={i}>
              <td>{search.id}</td>
              <td><img style={{width:100,height:100}} src={search.profile}/></td>
              <td>{search.name}</td>
              <td>{search.username}</td>

              <td>{search.email}</td>
              <td>{search.password}</td>
              <td>{search.confirmpassword}</td>
              <td>{search.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Find;
