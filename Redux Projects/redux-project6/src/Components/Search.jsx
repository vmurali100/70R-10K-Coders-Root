import React from "react";
import axios from "axios";
export function Search() {
  const onType = async (e) => {
    const search = e.target.value;
    const result = await axios.get(`http://localhost:4005/user?q=${search}`);
    console.table(result.data);
   
  };
  return (
    <div>
      <input type="text" placeholder="enter search" onChange={onType} />
    </div>
  );
}

export default Search;
