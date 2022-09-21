import React from "react";

import { useState } from "react";
export function Search() {
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
          <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((search, i) => (
            <tr key={i}>
              <td>{search.id}</td>
              <td>{search.fname}</td>
              <td>{search.lname}</td>
              <td>{search.dateofbirth}</td>

              <td>{search.email}</td>
              <td>{search.mobilenumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
