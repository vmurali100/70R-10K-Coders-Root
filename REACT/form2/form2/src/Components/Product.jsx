import React,{useState,useEffect} from 'react'

function Product(){
const[user,setuser]=useState([])
useEffect( async ()=>{
  let result = await fetch("https://fakestoreapi.com/products/")
  result = await result.json();
  setuser(result)
},[])

// useEffect(async  ()=>{
//   let result = await fetch("https://fakestoreapi.com/products/")
//   result=await result.json()
//   setuser(result)

// },[])

return(
  <div>
   <center> <h1>Product List</h1></center>
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
          {user.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.price}</td>
                <td>{user.description}</td>
                <td>{user.category}</td>
                <td><img style={{width:100,height:100} } src={user.image} alt={""}/>
                 </td>
                <td>{user.rating.rate}</td>
                <td>{user.rating.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  </div>
)

}


export default Product;
