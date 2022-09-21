import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getAllAlbums } from '../Store/Slice';

export const Home = () => {

    const albumsDetails = useSelector((state) => state.albums);

    console.log(albumsDetails.albums)

    localStorage.setItem("albums", JSON.stringify(albumsDetails.albums))

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [searchInput, setsearchInput] = useState('')
    const [filteredData, setfilteredData] = useState([])

    useEffect(() => {
        getAlbums();
    }, [])

    const getAlbums = () => {
        dispatch(getAllAlbums())
    }

    const handleEdit = (album) => {
        navigate(`/Edit/${album.id}`)
    }

    const handleDelete = (album) => {
        navigate(`/Delete/${album.id}`)
    }

    const searchItems = (value) => {
        setsearchInput(value)
        if (searchInput !== '') {
            const filteredResults = albumsDetails.albums.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setfilteredData(filteredResults)
        }
        else {
            setfilteredData(albumsDetails.albums)
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
                        <th>TITLE</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {searchInput.length > 1 ?

                        (filteredData.map((album, i) => {
                            return <tr key={i}>
                                <td>{album.id}</td>
                                <td>{album.userId}</td>
                                <td>{album.title}</td>
                                <td>
                                    <button type="button" className='btn btn-warning' onClick={() => handleEdit(album)}>EDIT</button>
                                </td>
                                <td>
                                    <button type="button" className='btn btn-danger' onClick={() => handleDelete(album)}>DELETE</button>
                                </td>
                            </tr>
                        }))
                
                        : 

                        (albumsDetails.albums.map((album,i)=>{
                            return <tr key={i}>
                            <td>{album.id}</td>
                            <td>{album.userId}</td>
                            <td>{album.title}</td>
                            <td>
                                <button type="button" className='btn btn-warning' onClick={() => handleEdit(album)}>EDIT</button>
                            </td>
                            <td>
                                <button type="button" className='btn btn-danger' onClick={() => handleDelete(album)}>DELETE</button>
                            </td>
                        </tr>
                        }))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}
