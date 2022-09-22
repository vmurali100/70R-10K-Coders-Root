import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {  getAllProducts } from '../Store/slice';

export const Home = () => {

    const productsDetails = useSelector((state) => state.products);

    console.log(productsDetails.products)

    localStorage.setItem("products", JSON.stringify(productsDetails.products))

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [searchInput, setsearchInput] = useState('')
    const [filteredData, setfilteredData] = useState([])

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        dispatch(getAllProducts())
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

            const filteredResults = productsDetails.products.filter((item) => {

                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            
            setfilteredData(filteredResults)
        }
        else {
            setfilteredData(productsDetails.products)
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
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>DESCRIPTION</th>
                        <th>CATEGORY</th>
                        <th>IMAGE</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {searchInput.length > 1 ?

                        (filteredData.map((item, i) => {
                            return <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td>{item.image}</td>
                                <td>
                                    <button type="button" className='btn btn-warning' onClick={() => handleEdit(item)}>EDIT</button>
                                </td>
                                <td>
                                    <button type="button" className='btn btn-danger' onClick={() => handleDelete(item)}>DELETE</button>
                                </td>
                            </tr>
                        }))

                        :

                        (productsDetails.products.map((item, i) => {
                            return <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td>{item.image}</td>
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
