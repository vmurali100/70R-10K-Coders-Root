import { Component } from "react";

export class Country extends Component{
    constructor(){
        super()
        this.state={
            countries :"Hello from America",
            details :{
                name:"America",currency:"Dollar",capital:"Washington"
            },
            cities: ["NewYork","Los Angeles","San Francisco"],
            flag:[{src:'./images/flag.jpg',title:'flag',height:"250",width:"300"}]

        }
    }
    changeCountries=()=>{
        this.setState({countries :"Hello from India"})
    }
 changeDetails=()=>{this.setState({details:{name:"India",currency:"Rupee",capital:"NewDElhi"}})}

 displayCities=()=>{
    this.setState({ cities: ["mumbai","banglore","hyderabad"]})
 }
 changeFlag=()=>{
    this.setState({ flag: [{src:'./images/india.jpg',title:'india',height:"250",width:"300"}]})
 }

 handleDelete = (i)=> {
    console.log(i)
    let allCities = [...this.state.cities]
    allCities.splice(i,1)
    this.setState({ cities:allCities})
 }

changeFlag =()=>{
    let newFlag = {...this.state.flag}
newFlag = {src:'./images/india.jpg',title:'india',height:"250",width:"300"
   

}
this.setState({flag: {flag: newFlag}})
}
    render(){
        // let flag=[{src:'./images/india.jpg',title:'india'},{src:'./images/flag.jpg',title:'america'}]
        return <div>
            <button onClick={this.changeCountries}>change Countries</button>
            <h2>Hello from User Class Component</h2>
            <p>User Message is : {this.state.countries}</p>

            <hr />
            <button onClick={this.changeDetails}>change Details</button>
            <p>Name :{this.state.details.name}</p>
            <p>Currency:{this.state.details.currency}</p>
            <p>Capital:{this.state.details.capital}</p>
            {/* <p>image :{this.state.details.image}</p> */}
            {/* {this.state.flag.map((i)=><img src={i.src} title={i.title} height="250" width="300"/>)} */}

            <hr />
            <h2>Cities</h2>
            <button onClick={this.displayCities}>Display Cities</button>
            {this.state.cities.map((cities,i)=>{
                return <p  onClick={()=>{this.handleDelete(i)}} key={i}>{cities}</p>
            })}
            <hr />
            <button onClick={this.changeFlag}>change Flag</button>
            <h2>change Flag:</h2>
           {/* <p>image :{this.state.details.image}</p> */}
           {this.state.flag.map((i)=><img src={i.src} title={i.title} height="250" width="300"/>)}
        </div>
    }
}