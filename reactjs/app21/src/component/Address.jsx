import React,{useState} from 'react'

export const Address = () => {
    const [user, setuser] = useState({
        street:"",
        city:"",
        zip:"",
        country:""
    })
    const handlechange = (e) => {
        let newuser = { ...user }
        newuser[e.target.name] = e.target.value
        setuser(newuser)
    }

    const [users, setusers] = useState([])
    const [index, setindex] = useState()

    const handlesubmit = () => {
        console.log(user)
        let newusers = [...users]
        newusers.push(user)
        setusers(newusers)
    }

    const handlereset = () => {
        setuser({
            street:"",
            city:"",
            zip:"",
            country:""
        })
    }

    const handledit = (myuser, i) => {
        setuser(myuser)
        setindex(i)
    }

    const handledelete = (street) => {
        let newusers = users.filter((myuser) => myuser.street !== street)
        setusers(newusers)
    }

    const clearform=()=>{
        setuser({
            street:"",
            city:"",
            zip:"",
            country:""
        })
    }
    const updateuser=()=>{
        let newusers=[...users]
    newusers[index]=user;
    setusers(newusers)
    clearform()
    }
    const { street, city, zip, country } = user

  return (
    <div>
        <p><h1>ADDRESS</h1></p>
        <form>
                <label htmlFor="street">STREET</label>
                <input type="text" name='street' value={street} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="lastname">CITY</label>
                <input type="text" name="city" value={city} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="dateofbirth">ZIP</label>
                <input type="text" name="zip" value={zip} onChange={(e) => { handlechange(e) }} /><br />

                <label htmlFor="country">COUNTRY</label>
                <input type="text" name="country" value={country} onChange={(e) => { handlechange(e) }} /><br />

               

                <button type='button' onClick={handlesubmit}>OK</button>
                <button type='button' onClick={handlereset}>CANCEL</button>
                <button type='button' onClick={updateuser}>update user</button>
            </form>
            <table class="table">
                <thead>
                    <tr>
                        <th >street</th>
                        <th >city</th>
                        <th >zip</th>
                        <th >country</th>
                     
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.street}</td>
                            <td>{user.city}</td>
                            <td>{user.zip}</td>
                            <td>{user.country}</td>
                            
                            <td> <button className='btn btn-warning' onClick={() => { handledit(user, i) }} >EDIT</button> </td>
                            <td>  <button className='btn btn-danger' onClick={() => { handledelete(user.street) }}>DELETE</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
    </div>
  )
}
