import React from "react";

import { useState } from "react";
export function Search() {
  const [search, setsearch] = useState();
  const [data, setdata] = useState([]);

  const searchHandle = async (event) => {
    let search = event.target.value;
    let result = await fetch(`http://localhost:4010/nestedusers?q=${search}`);
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
            <th>Email</th>
            <th>User Name</th>
            <th>Password</th>

            <th>Street Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {data.map((search, i) => (
            <tr key={i}>
              <td>{search.id}</td>
              <td>{search.email}</td>
              <td>{search.username}</td>
             
              <td>{search.password}</td>
              <td>{search.address.streetAddress}</td>
              <td>{search.address.city}</td>
              <td>{search.address.state}</td>
              <td>{search.address.zip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
