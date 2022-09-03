import React,{useState} from 'react'
import CartData from './data.json'

export const CartsTable = () => {
  const [carts, setcarts] = useState(CartData)
  const deletecart=(street)=>{
    let newcarts= carts.filter((cart)=>cart.street!=street);
    setcarts(newcarts)


  }
  return (
    <div className='container'>
        <table class="table table-hover">
            <thead >
                <tr >
                    <th >Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zipcode</th>
                    <th>Country</th>
                    <th>Edit</th>
                    <th>Delete</th>


                </tr>
            </thead>
            <tbody>
              {carts.map((cart,i)=>{
                return <tr key={i}>
                <td>{cart.street}</td>
                <td>{cart.city}</td>
                <td>{cart.state}</td>
                <td>{cart.zipcode}</td>
                <td>{cart.country}</td>
                <td><button  type="button" className='btn btn-warning'>Edit</button></td>
                <td><button  type="button" className='btn btn-danger' onClick={()=>{deletecart(cart.street)}}>Delete</button></td>



                </tr>

              })}
            </tbody>
        </table>
    </div>
  )
}
