import React from "react";

import { useState } from "react";
export function Search() {
  const [search, setsearch] = useState();
  const [data, setdata] = useState([]);

  const searchHandle = async (event) => {
    let search = event.target.value;
    let result = await fetch(`http://localhost:3201/user?q=${search}`);
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
          <th>Student Name</th>
            <th>User Name</th>
            <th>Subject Name</th>
            <th>Description</th>
            <th>Teacher Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {data.map((search, i) => (
            <tr key={i}>
              <td>{search.id}</td>
              <td>{search.studentname}</td>
              <td>{search.username}</td>
              <td>{search.subjectname}</td>
              <td>{search.description}</td>
              <td>{search.teachername}</td>

              <td>{search.email}</td>
              <td>{search.mobileno}</td>
              <td>{search.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
