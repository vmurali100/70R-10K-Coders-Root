import React, {useState} from 'react'

export const CreateDetail = () => {
    const [detail, setdetail] = useState({
        
            "street": "",
            "city": "",
            "state": "",
            "zip": ""
        
    })
    const [details, setdetails] = useState([])

    const handleChange=(e)=>{
      let newDetail = {...detail};
      newDetail[e.target.name] = e.target.value
      setdetail(newDetail)
      
    };
    const handleSubmit=()=>{
      console.log(detail)
      let newDetails = [...details]
      newDetails.push(detail)
      setdetails(newDetails)
      clearForm()
    };
    const clearForm=()=>{
        setdetail({
        
            "street": "",
            "city": "",
            "state": "",
            "zip": ""
      })
    }

    const deleteOne=(id)=>{
      let newDetails = details.filter((myDetail)=>myDetail.id !==id);
      setdetails(newDetails)
    }
    const handleEdit=(myDetail)=>{
        setdetail(myDetail)
    }
    const updateDetail =()=>{

    }
    const {street,city,state,zip} = details;


  return (
    <div>
        <form>
            <label htmlFor="">Street</label>
            <input type="text" name="id" value={street} onChange={(e)=>{handleChange(e)}}/> <br />
            <label htmlFor="">City</label>
            <input type="text" name="email" value={city} onChange={(e)=>{handleChange(e)}}/> <br />
            <label htmlFor="">State</label>
            <input type="text" name="username" value={state} onChange={(e)=>{handleChange(e)}}/> <br />
            <label htmlFor="">Zip</label>
            <input type="text" name="password" value={zip} onChange={(e)=>{handleChange(e)}}/> <br />
            <button type="button" onClick={()=>{handleSubmit()}}>Add User</button>
            <button onClick={updateDetail}>Update User</button>
        </form>

        <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th >Street</th>
                        <th >City</th>
                        <th >state</th>
                        <th >Zip</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((One, i) => {
                        return <tr key={i}>
                            <td>{One.street}</td>
                            <td>{One.city}</td>
                            <td>{One.state}</td>
                            <td>{One.zip}</td>
                            <td><button className="btn btn-warning" onClick={()=>{handleEdit(detail)}}>Edit</button></td>
                            <td><button className="btn btn-danger" onClick={() => (deleteOne(One.id))}>Delete</button></td>

                        </tr>
                    })}
                </tbody>
            </table>
    </div>
  )
}
