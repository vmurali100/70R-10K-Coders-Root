import React, { Component } from 'react'

export default class SampleTwoClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      info:  {university:"",institute:"",branch:"",degree:"",Experience:"",yourwebsiteorblog:""}

         
      }
    }
       handlechange=(e)=>{//synthetic element
        console.log(e.target.value)//to read element
        var inputname =e.target.name
        var newinfo ={...this.state.info}//creating an copy of object
        newinfo[inputname]=e.target.value
        this.setState({info:newinfo})


     }

      handleSubmit=()=>{
        console.log(this.state.info)
    }
  render() {
    return (
        <div>
        <h2>REGISTRATION DETAILS</h2>
       <form>
           <label htmlFor='university'>University :</label>
           <input type="text" name="university" value={this.state.info.university} onChange={(e)=>{this.handlechange(e)}} /> <br/>
           <label htmlFor="institute">Institute :</label>
           <input type="text" name="institute"value={this.state.info.institute} onChange={(e)=>{this.handlechange(e)}}/> <br/>
           <label htmlFor="branch">Branch :</label>
           <input type="text" name="branch"value={this.state.info.branch} onChange={(e)=>{this.handlechange(e)}}/> <br/>
           <label htmlFor="degree">Degree :</label>
           <input type="text" name="degree"value={this.state.info.degree} onChange={(e)=>{this.handlechange(e)}}/> <br/>
           <label htmlFor="experience">Experience :</label>
           <input type="text" name="experience"value={this.state.info.experience} onChange={(e)=>{this.handlechange(e)}}/> <br/>
           <label htmlFor="yourwebsiteorblog">Your Website Or Blog :</label>
           <input type="text" name="yourwebsiteorblog"value={this.state.info.yourwebsiteorblog} onChange={(e)=>{this.handlechange(e)}}/> <br/>

           <button onClick={this.handleSubmit} type="button">SUBMIT</button>

       </form>
      </div>
    )
  }
}
