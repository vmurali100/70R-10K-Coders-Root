import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getAllCarts } from '../Store/slice';

export const Home = () => {

    const cartsDetails = useSelector((state) => state.carts);

    console.log(cartsDetails.carts)

    localStorage.setItem("carts", JSON.stringify(cartsDetails.carts))

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [searchInput, setsearchInput] = useState('')
    const [filteredData, setfilteredData] = useState([])

    useEffect(() => {
        getCarts();
    }, [])

    const getCarts = () => {
        dispatch(getAllCarts())
    }

    const handleEdit = (item) => {
        navigate(`/Edit/${item.id}`)
    }

    const handleDelete = (item) => {
        navigate(`/Delete/${item.id}`)
    }

    const searchItems = (value) => {
        setsearchInput(value)
        if (searchInput !== '') {

            const filteredResults = cartsDetails.carts.filter((item) => {

                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            
            setfilteredData(filteredResults)
        }
        else {
            setfilteredData(cartsDetails.carts)
        }
    }

    return (
        <div className='container'>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>

                <label>Search :</label>

                <input type="text" style={{ marginLeft: "20px" }} onChange={(e) => searchItems(e.target.value)}></input>
            </div>

            <table className="table table-striped-columns">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>USER ID</th>
                        <th>DATE</th>
                        <th>PRODUCT ID</th>
                        <th>QUANTITY</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {searchInput.length > 1 ?

                        (filteredData.map((item, i) => {
                            return <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.userId}</td>
                                <td>{item.date}</td>
                                <td>{item.products.productId}</td>
                                <td>{item.products.quantity}</td>
                                <td>
                                    <button type="button" className='btn btn-warning' onClick={() => handleEdit(item)}>EDIT</button>
                                </td>
                                <td>
                                    <button type="button" className='btn btn-danger' onClick={() => handleDelete(item)}>DELETE</button>
                                </td>
                            </tr>
                        }))

                        :

                        (cartsDetails.carts.map((item, i) => {
                            return <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.userId}</td>
                                <td>{item.date}</td>
                                <td>{item.products.productId}</td>
                                <td>{item.products.quantity}</td>
                                <td>
                                    <button type="button" className='btn btn-warning' onClick={() => handleEdit(item)}>EDIT</button>
                                </td>
                                <td>
                                    <button type="button" className='btn btn-danger' onClick={() => handleDelete(item)}>DELETE</button>
                                </td>
                            </tr>
                        }))
                    }

                </tbody>
            </table>
        </div>
    )
}
