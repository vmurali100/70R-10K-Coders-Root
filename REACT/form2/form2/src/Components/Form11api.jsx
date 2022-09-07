import axios from "axios";
import React, { useState } from "react";

import { useEffect } from "react";

export const Form11api = () => {
  const [user, setuser] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",

    rating: [
      {
        rate: "",
        count: "",
      },
    ],
  });
  const [users, setusers] = useState([]);
  let url = "https://fakestoreapi.com/products/";
  useEffect(() => {
    // showImage()
    axios.get(url).then((res) => {
      setusers(res.data);
    });
    getDataFromServer();
  }, []);
  //       function showImage(){
  //         return (Image.map((image,index)=>{
  // <Image image={image.url} index={index}  />
  //         }))
  //       }
  // function showImage(){
  //   return ()
  // // <img src="https://fakestoreapi.com/products" alt=""/>
  // }
  const getDataFromServer = () => {
    axios.get(url).then((response) => {
      console.log(response);
      setusers(response.data);
    });
  };
  return (
    <center>
    <div  className="col-sm-8 offset-sm-0">
      <h1 >Products List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Images</th>

            <th scope="col">Rate</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.price}</td>
                <td>{user.description}</td>
                <td>{user.category}</td>
                <td><img style={{width:100,height:100} } src={user.image}/>
                 </td>
                <td>{user.rating.rate}</td>
                <td>{user.rating.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </center>
  );
};
