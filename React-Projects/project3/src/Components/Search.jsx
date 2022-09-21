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
          <th>Registration Number</th>
            <th>University</th>
            <th>Institute</th>
            <th>Branch</th>
            <th>Degree</th>
            <th>Average CGPA</th>
            <th>Experience</th>
            <th>Blog/Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((search, i) => (
            <tr key={i}>
              <td>{search.regno}</td>
              <td>{search.university}</td>
              <td>{search.institute}</td>
              <td>{search.branch}</td>

              <td>{search.degree}</td>
              <td>{search.avgcgpa}</td>
              <td>{search.experience}</td>
              <td>{search.blog}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
