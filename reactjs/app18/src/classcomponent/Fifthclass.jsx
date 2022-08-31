import React, { Component } from 'react'

export default class Fifthclass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fifth: {
                university: "",
                institute: "",
                branch: "",
                degree: "",
                averagecpi: "",
                experience: "",
                yourwebsite: "",
            }
        }
    }

    handlefunction = (e) => {
        console.log(e.target.value)
        var inputname = (e.target.name)
        var newfifth = { ...this.state.fifth}
        newfifth[inputname] = e.target.value
        this.setState({fifth:newfifth})
        // setfifth(newfifth)
    }

     handleok=()=>{
        console.log(this.state.fifth)
    }
    render() {
        return (
            <div>
                <p><h1>REGISTRATION DETAILS</h1></p>
        <form>
           <label htmlFor="university">university</label>
           <input type="text" name='university' value={this.state.fifth.university} onChange={(e)=>this.handlefunction(e)} /><br/>

           <label htmlFor="institute">institute</label>
           <input type="text" name='institute' value={this.state.fifth.institute} onChange={(e)=>this.handlefunction(e)} /><br/>

           <label htmlFor="branch">branch</label>
           <input type="text" name='branch' value={this.state.fifth.branch} onChange={(e)=>this.handlefunction(e)} /><br/>

           <label htmlFor="degree">degree</label>
           <input type="text" name='degree' value={this.state.fifth.degree} onChange={(e)=>this.handlefunction(e)} /><br/>

           <label htmlFor="averagecpi">averagecpi</label>
           <input type="text" name='averagecpi' value={this.state.fifth.averagecpi} onChange={(e)=>this.handlefunction(e)} /><br/>


           <label htmlFor="experience">experience</label>
           <input type="text" name='experience' value={this.state.fifth.experience} onChange={(e)=>this.handlefunction(e)} /><br/>

           <label htmlFor="yourwebsite">yourwebsite</label>
           <input type="text" name='yourwebsite' value={this.state.fifth.yourwebsite} onChange={(e)=>this.handlefunction(e)} /><br/>

           <button onClick={this.handleok} type="button">enter</button>
        </form>
            </div>
        )
    }
}
