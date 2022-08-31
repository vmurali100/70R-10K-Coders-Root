// import React, { Component } from 'react'

// export default class UserClass extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         person:{
//       firstName:"",
//       lastName:"",
//       email:"",
      
//     }
//   }
//   handleChange=(e)=>{//synthetic element
//     console.log(e.target.value);//to read element
//     var inputname =e.target.name;
//     var newperson ={...this.state.person};//creating an copy of object
//     newperson[inputname]=e.target.value;
//     this.setState{person:newperson};
//     console.log(inputname)

//     //setfirstName(e.target.value)//to update,used for inputfield 1
//  }
//  const handleSubmit=()=>{
//   console.log(this.state.person)
// }

//   render() {
//     return (
//       <div>
//  <form>
//            <label htmlFor='firstName'>First Name:</label>
//            <input type="text" name="firstName" value={this.stateperson.firstName} onChange={(e)=>{this.handleChange(e)}} /> <br/>
//            <label htmlFor="lastName">Last Name:</label>
//            <input type="text" name="lastName"value={this.stateperson.lastName} onChange={(e)=>{this.handleChange(e)}}/> <br/>
//            <label htmlFor="email">Email:</label>
//            <input type="text" name="email"value={this.stateperson.email} onChange={(e)=>{this.handleChange(e)}}/> <br/>
//            <button onClick={this.handleSubmit} type="button">Add User</button>
//        </form>
//       </div>
//     )
//   }
// }}

    
