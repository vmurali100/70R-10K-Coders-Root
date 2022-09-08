import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Mark = () => {
    const [mark, setmark] = useState({
        university: "",
        institute: "",
        branch: "",
        degree: "",
        average: "",
        experience: "",
        website: ""
    })

    const [marks, setmarks] = useState([])

    useEffect(() => {
        getDataFromServer()
    }, [])

    let url = "http://localhost:3000/scores/"

    const getDataFromServer = () => {
        axios.get(url).then((response) => {
            console.log(response)
            setmarks(response.data)
        })
    }


    const handleChange = (e) => {
        let newMark = { ...mark }
        newMark[e.target.name] = e.target.value
        setmark(newMark)
    }

    const addUser = () => {
        axios.post(url, mark).then(() => {
            console.log("mark added Successfully")
            clearForm();
            getDataFromServer()
        })
    }
    const clearForm = () => {
        setmark({
            university: "",
            institute: "",
            branch: "",
            degree: "",
            average: "",
            experience: "",
            website: ""

        })
    }
    const handleDelete = (src) => {
        axios.delete(url + src.id).then(() => {
            console.log("mark deleted Successfully");
            getDataFromServer();
        })
    }
    const editmark = (src) => {
        setmark(src)
    }
    const updateMark = () => {
        axios.put(url + mark.id, mark).then(() => {
            console.log("updated");
            getDataFromServer();
            clearForm()
        })
    }
    return (
        <div>
            <form>
                <label htmlFor='university'>University: </label>
                <input type="text" name='university' value={mark.university} onChange={((e) => { handleChange(e) })} /><br />
                <label htmlFor='institute'>Institute: </label>
                <input type="text" name='institute' value={mark.institute} onChange={((e) => { handleChange(e) })} /><br />
                <label htmlFor='branch'>Branch: </label>
                <input type="text" name='branch' value={mark.branch} onChange={((e) => { handleChange(e) })} /><br />
                <label htmlFor='degree'>Degree: </label>
                <input type="text" name='degree' value={mark.degree} onChange={((e) => { handleChange(e) })} /><br />
                <label htmlFor='average'>Average: </label>
                <input type="text" name='average' value={mark.average} onChange={((e) => { handleChange(e) })} /><br />
                <label htmlFor='experience'>Experience: </label>
                <input type="text" name='experience' value={mark.experience} onChange={((e) => { handleChange(e) })} /><br />
                <label htmlFor='website'>Website: </label>
                <input type="text" name='website' value={mark.website} onChange={((e) => { handleChange(e) })} /><br />
                <button type="button" onClick={addUser}>Add mark</button>
                <button type="button" onClick={updateMark}>Update mark</button>

                <hr />
                <table border={2} class="table table-striped">

                    <thead>
                        <tr>
                            <th>university</th>
                            <th>institute</th>
                            <th>branch</th>
                            <th>degree</th>
                            <th>average</th>
                            <th>experience</th>
                            <th>website</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marks.map((src, i) => {
                            return <tr key={i}>
                                <td>{src.university}</td>
                                <td>{src.institute}</td>
                                <td>{src.branch}</td>
                                <td>{src.degree}</td>
                                <td>{src.average}</td>
                                <td>{src.experience}</td>
                                <td>{src.website}</td>
                                <td>
                                    <button type="button" className='btn btn-warning' onClick={() => { editmark(src) }}>Edit</button>
                                </td>
                                <td><button type="button" className='btn btn-danger' onClick={() => { handleDelete(src) }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </form>
        </div>
    )
}

