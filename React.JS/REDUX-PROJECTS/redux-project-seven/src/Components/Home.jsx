import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getAllfillText } from '../Store/slice';

export const Home = () => {

    const filltextDetails = useSelector((state) => state.filltextone);

    console.log(filltextDetails.filltextone)

    localStorage.setItem("filltextone", JSON.stringify(filltextDetails.filltextone))

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [searchInput, setsearchInput] = useState('')
    const [filteredData, setfilteredData] = useState([])

    useEffect(() => {
        getFilltext();
    }, [])

    const getFilltext = () => {
        dispatch(getAllfillText())
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
            const filteredResults = filltextDetails.filltextone.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setfilteredData(filteredResults)
        }
        else {
            setfilteredData(filltextDetails.filltextone)
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
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {searchInput.length > 1 ?

                        (filteredData.map((item, i) => {
                            return <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>
                                    <button type="button" className='btn btn-warning' onClick={() => handleEdit(item)}>EDIT</button>
                                </td>
                                <td>
                                    <button type="button" className='btn btn-danger' onClick={() => handleDelete(item)}>DELETE</button>
                                </td>
                            </tr>
                        }))
                
                        : 

                        (filltextDetails.filltextone.map((item,i)=>{
                            return <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
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
