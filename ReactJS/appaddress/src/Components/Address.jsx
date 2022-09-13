import React,{useState} from 'react'

export const Address = () => {
    const [useradd, setuseradd] = useState({
        userid:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
    });
    const [addData, setaddData] = useState([]);
    const [index, setindex] = useState(0);

    const { userid, street, city, state, zipcode, country} = useradd;

    const handleData =(e)=>{
        let newadd = {...useradd};
        newadd[e.target.name]= e.target.value;
        setuseradd(newadd);
        
    }

    const handleSubmit=()=>{
        console.log(useradd);
        let newaddData = [...addData];
        newaddData.push(useradd);        
        setaddData(newaddData);
        console.log(newaddData);
        clearForm();
    };

    const clearForm=()=>{
        setuseradd({
            userid:"",
            street:"",
            city:"",
            state:"",
            zipcode:"",
            country:"",
        })
    }

    const handleEdit = (useradd,ind) =>{
        setuseradd(useradd);
        setindex(ind);

    }

    const handleDelete =(userid)=>{
        let newUsers = addData.filter((useradd) => useradd.userid !== userid);
        setaddData(newUsers);
    }
    const handleUpdate=(ind)=>{
        let newData =[...addData];
        newData[index] = useradd;
        setaddData(newData);
        clearForm();
    }

  return (  
  
    <div>
        <h2>Address Form</h2>
        <form action="">
            <label htmlFor="">UserId : </label>
            <input type="text" name="userid" value={userid} onChange={(e)=>{handleData(e)}}/><br /> 
            <label htmlFor="">Street : </label>
            <input type="text" name="street" value={street} onChange={(e)=>{handleData(e)}}/><br />
            <label htmlFor="">City : </label>
            <input type="text" name="city" value={city} onChange={(e)=>{handleData(e)}}/><br />
            <label htmlFor="">State : </label>
            <input type="text" name="state" value={state} onChange={(e)=>{handleData(e)}}/><br />
            <label htmlFor="">ZipCode : </label>
            <input type="text" name="zipcode" value={zipcode} onChange={(e)=>{handleData(e)}}/><br />
            <label htmlFor="">Country : </label>
            <input type="text" name='country' value={country} onChange={(e)=>{handleData(e)}}/> <br />
            <button type="button" onClick={()=>{handleSubmit()}}>Add Address</button>
            <button type="button" onClick={()=>{handleUpdate()}}>Update Address</button>
        </form>
        <hr />
        <table border={1} align="center">
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>ZipCode</th>
                    <th>Country</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {addData.map((useradd,i) => {
                    return <tr key={i}>
                        <td>{useradd.userid}</td>
                        <td>{useradd.street}</td>
                        <td>{useradd.city}</td>
                        <td>{useradd.state}</td>
                        <td>{useradd.zipcode}</td>
                        <td>{useradd.country}</td>
                        <td><button type="button" onClick={()=>{handleEdit(useradd,i)}}>Edit</button></td>
                        <td><button type="button" onClick={()=>{handleDelete(useradd.userid)}}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
