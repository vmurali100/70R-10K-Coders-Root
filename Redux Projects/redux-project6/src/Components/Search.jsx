import React from "react";

import { useState } from "react";
export function Search() {
  const [search, setsearch] = useState();
  const [data, setdata] = useState([]);

  const searchHandle = async (event) => {
    let search = event.target.value;
    let result = await fetch(`http://localhost:4005/user?q=${search}`);
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
            <th>User Name</th>

            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>City</th>
            <th>Street</th>
            <th>St Number</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((search, i) => (
            <tr key={i}>
              <td>{search.id}</td>
              <td>{search.name.firstname}</td>
              <td>{search.name.lastname}</td>
              <td>{search.username}</td>

              <td>{search.email}</td>
              <td>{search.phone}</td>
              <td>{search.password}</td>
              <td>{search.address.city}</td>
              <td>{search.address.street}</td>
              <td>{search.address.number}</td>
              <td>{search.address.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
