import React,{useState} from 'react'

export const CreateCart = () => {

const [cart, setcart] = useState({"street":"","city":"","state":"","zipcode":"","country":""})
const [carts, setcarts] = useState([]);

const [index, setindex] = useState(0)

        const handleChange=(e)=>{
            let newCart ={...cart};
            newCart[e.target.name]= e.target.value;
            setcart(newCart)
        };
        const handleOK=()=>{
            console.log(cart)
            let newCarts=[...carts]
            newCarts.push(cart)
            setcarts(newCarts)
            ClearForm()
        };
        const ClearForm=()=>{
            setcart( {"street":"","city":"","state":"","zipcode":"","country":""})

        }
        const deletecart=(street)=>{
            let newCarts=carts.filter((myCart)=>myCart.street !=street);
        setcarts(newCarts)
        }
        const handleEdit=(myCart,i)=>{
            setcart(myCart);
            setindex(i)
    
        }
    
        const handleUpdate=()=>{
            let newCarts =[...carts];
            newCarts[index]=cart;
            setcarts(newCarts)
            ClearForm();
        }
        const{street,city,state,zipcode,country}=cart;
  return (
    <div>
        <h2>ADDRESS</h2>
       <form>
           <label htmlFor=''>Street :</label>
           <input type="text" name="street" value={street} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="">City :</label>
           <input type="text" name="city"value={city} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">State :</label>
           <input type="text" name="state"value={state} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Zip code :</label>
           <input type="text" name="zipcode"value={zipcode} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Country :</label>
           <input type="text" name="country"value={country} onChange={(e)=>{handleChange(e)}}/> <br/>
           <button onClick={handleOK} type="button">OK</button>
           <button onClick={handleUpdate}type="button">Update</button>

       </form>
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
                <td><button  type="button" className='btn btn-warning' onClick={()=>{handleEdit(cart,i)}}>Edit</button></td>
                <td><button  type="button" className='btn btn-danger' onClick={()=>{deletecart(cart.street)}}>Delete</button></td>
                </tr>
              })}
            </tbody>
        </table>
    </div>
  )
}
