import React from "react";

import { useState } from "react";
export function FindProduct() {
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
          <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Rate</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((search, i) => (
            <tr key={i}>
              <td>{search.id}</td>
              <td>{search.title}</td>
                <td>{search.price}</td>
                <td>{search.description}</td>
                <td>{search.category}</td>
                <td><img style={{width:100,height:100}} src={search.image}/></td>
                <td>{search.rating.rate}</td>
                <td>{search.rating.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FindProduct;
