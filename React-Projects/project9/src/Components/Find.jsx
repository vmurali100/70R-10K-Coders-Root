import React from "react";

import { useState } from "react";
export function Find() {
  const [search, setsearch] = useState();
  const [data, setdata] = useState([]);

  const searchHandle = async (event) => {
    let search = event.target.value;
    let result = await fetch(`http://localhost:4002/user?q=${search}`);
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
            <th>Album ID</th>
            <th>Title</th>

            <th>Url</th>
            <th>Thumbnail Url</th>
          </tr>
        </thead>
        <tbody>
          {data.map((search, i) => (
            <tr key={i}>
              <td>{search.id}</td>
              <td>{search.albumId}</td>
              <td>{search.title}</td>

              <td>{search.url}</td>
              {/* <td>{search.thumbnailUrl}</td> */}
              <td>
                <img src={search.thumbnailUrl} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Find;
