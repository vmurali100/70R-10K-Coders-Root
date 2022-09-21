import React from "react";

import { useState } from "react";
export function Find() {
  const [search, setsearch] = useState();
  const [data, setdata] = useState([]);

  const searchHandle = async (event) => {
    let search = event.target.value;
    let result = await fetch(`http://localhost:4001/user?q=${search}`);
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
            <th>User ID</th>
            <th>DATE</th>

            <th>ProductId</th>
            <th>Quantity</th>
            
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {data.map((search, i) => (
            <tr key={i}>
               <td>{search.id}</td>
              <td>{search.userId}</td>
              <td>{search.date}</td>

              <td>{search.products.productId}</td>
              <td>{search.products.qauntity}</td>
             
              <td>{search.__v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Find;
