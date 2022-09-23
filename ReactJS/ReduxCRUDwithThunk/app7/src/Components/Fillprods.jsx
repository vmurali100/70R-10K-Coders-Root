import React from 'react'
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllproducts } from '../Store/ProductsSlice';
import {useParams} from 'react-router-dom';

export const FillProds = () => {
  const dispatch = useDispatch()
  const getallProducts =  useSelector((state)=> state.products)
  console.log(getallProducts.products)
  localStorage.setItem("FillProducts",JSON.stringify(getallProducts.products))
  const param = useParams();
  console.log(param)

  useEffect(()=>{
    dispatch(getAllproducts())
  },[])
  return (
    <div className='container'>
      <Link to={'/create'} className="btn btn-primary">Create New</Link>
      <table className="table table-dark table-striped">
 <thead>
  <tr>
    <th>Id</th>
    <th>Title</th>
    <th>Price</th>
    <th>Image</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
 </thead>
 <tbody>
  {getallProducts.products.map((prod,i)=> <tr key={i}>
    <td>{prod.id}</td>
    <td>{prod.title}</td>
    <td>{prod.price}</td>
    {/* <td><Link to={`${prod.image}`} > {prod.image} </Link></td> */}
    <td> <a href={`${prod.image}`} target="_blank" > {prod.image} </a></td>
    <td><Link to={`/edit/${prod.id}`}> <button type="button" className='btn btn-warning'>Edit</button> </Link></td>
    <td><Link to={`/delete/${prod.id}`}> <button type="button" className='btn btn-danger'>Delete</button> </Link></td>
  </tr>)}
 </tbody>
</table>

    </div>
  )
}
