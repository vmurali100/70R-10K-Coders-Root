import React from "react";

import { useState } from "react";
export function Search() {
  const [search, setsearch] = useState();
  const [data, setdata] = useState([]);

  const searchHandle = async (event) => {
    let search = event.target.value;
    let result = await fetch(`http://localhost:4008/user?q=${search}`);
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
          <th>User Name</th>
            <th>Password</th>
            <th>Email Address</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((search, i) => (
            <tr key={i}>
              <td>{search.id}</td>
              
              <td>{search.username}</td>
              <td>{user.password}</td>
              <td>{user.emailaddress}</td>
              <td>{user.gender}</td>

              <td>{user.dateofbirth}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
