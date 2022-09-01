import React, { Component } from 'react';

export default class SampleOneClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      address:{street:"",city:"",state:"",zipcode:"",country:""}
    }
  };
   handleChange=(e)=>{//synthetic element
    console.log(e.target.value)//to read element
    var inputname =e.target.name
    var newaddress ={...this.state.address}//creating an copy of object
    newaddress[inputname]=e.target.value

    this.setState({address:newaddress})
    
 }
     handleOK=()=>{
        console.log(this.state.address)
    }
    
    
  render() {
    return (
      <div>
        <h2>ADDRESS</h2>
         <form>
           <label htmlFor="street">Street :</label>
           <input type="text" name="street" value={this.state.address.street} onChange={(e)=>{this.handleChange(e)}} /> <br/>
           <label htmlFor="city">City :</label>
           <input type="text" name="city"value={this.state.address.city} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="state">State :</label>
           <input type="text" name="state"value={this.state.address.state} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="zipcode">Zip code :</label>
           <input type="text" name="zipcode"value={this.state.address.zipcode} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="country">Country :</label>
           <input type="text" name="country"value={this.state.address.country} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <button onClick={this.handleOK} type="button">OK</button>
           <button  type="button">Cancel</button>


         </form>
      </div>
    );
  }
}
