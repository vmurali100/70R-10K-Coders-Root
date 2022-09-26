import React,{useState} from 'react'
import {useNavigate,Link,useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';

export const FakeProducts = () => {
    const url='http://localhost:3301/FakeProd';
    const objurl = useParams();
    console.log(objurl.id)
    const navigate = useNavigate();
    const [productsArr, setproductsArr] = useState([])
    const getData=()=>{
        axios.get(url).then((res)=>{
            setproductsArr(res.data)
            localStorage.setItem('FakeProducts',JSON.stringify(res.data))
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div className="home">
     <Link to={'/'}><button type="button">GoBack</button>   </Link>   
    <div className='container'>
        {productsArr.map((prod,i)=> <div key={i} className='alldetails'>
            <li>{prod.id}</li>
            <li>{prod.title}</li>
            <li>{prod.price}</li>
            <li>{prod.description}</li><br/>
            <p><Link to={`/edit/${prod.id}`}><button type='button' className='btn btn-primary'>Edit</button></Link></p>
            <p><Link to={`/delete/${prod.id}`}><button type='button' className='btn btn-danger'>Delete</button></Link></p>
        </div> )}
    </div>
    </div>
  )
}
