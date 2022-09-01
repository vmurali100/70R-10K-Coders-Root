import  { Component } from 'react'

export default class Form1f extends Component {
        constructor(){
            super()
            this.state={
                person:{
                Street :"",
                City:"",
                State :"",
                ZipCode:"",
                Country:"",}
            }
        } 
      
        handleChange = (e) =>{
         var input = e.target.name;
        //  console.log(e.target.value);
         var newPerson = {...this.state.person};
         newPerson[input] = e.target.value
         this.setState({person : newPerson});
        }
    
        handleSubmit = () =>{
            console.log(this.state.person)
        }

        handleReset = ()=>{
            this.setState({
                person:{
                Street :"",
                City:"",
                State :"",
                ZipCode:"",
                Country:"",
                }
            })
        }
  render() {
   
    return <div>
        <form action="">
                <h2>Address</h2>
                <table align="center">
                    <tbody>
                <tr><td> <label htmlFor="">Street : </label></td>
                <td><input type="text" name="Street" value={this.state.person.Street} onChange={(e)=>{this.handleChange(e)}}/></td></tr>
                   <tr><td align='center'><label htmlFor="">City : </label></td>
                    <td><input type="text"  name="City" value={this.state.person.City} onChange={(e)=>{this.handleChange(e)}}/></td></tr>
                    <tr><td><label htmlFor="">State : </label></td>
                    <td><input type="text" name="State" value={this.state.person.State} onChange={(e)=>{this.handleChange(e)}}/></td></tr>
                    <tr><td><label htmlFor="">Zip Code : </label></td>
                    <td><input type="text" name="ZipCode" value={this.state.person.ZipCode} onChange={(e)=>{this.handleChange(e)}} /></td></tr>
                    <tr><td><label htmlFor="">Country : </label></td>
                    <td><input type="text" name="Country" value={this.state.person.Country} onChange={(e)=>{this.handleChange(e)}}/> </td></tr>   
                    </tbody>       
                                    
                </table>
                <button type="button" onClick={this.handleSubmit}>Okay</button>
                <button type="button" onClick={this.handleReset}>Cancel</button>
                </form>
      </div>
  }
}
