import { Component } from "react";

export class ClassFive extends Component{
    constructor(){
        super()
        this.state = {
           welcome : "",
           car : {},
           car_companies : []
        }
    }

    changeString=()=>{
        this.setState({
            welcome:"Welcome to the car showroom"})
    }

    changeObject=()=>{
        this.setState({
            car : {
                "Name":"Santro",
                "Company" : "Hyundai",
                "Price" : 580000
            }
        })
    }

    displayArray=()=>{
        this.setState({
            car_companies : ["Hyundai","Maruthi","Ford","Tata"]
        })
    }

    handleDelete=(i)=>{
        let newArray = [...this.state.car_companies]
        newArray.splice(i,1)
        this.setState({car_companies : newArray})
    }

    render(){
        return <div>
         <h2>String</h2>
         <button onClick={this.changeString}>SET STRING</button>
         <p>My Full Name is : {this.state.welcome}</p>
         <hr />

         <h2>Object</h2>
         <button onClick={this.changeObject}>SET OBJECT PROPERTIES AND DISPLAY</button>
         <p>{this.state.car.Name}</p>
         <p>{this.state.car.Company}</p>
         <p>{this.state.car.Price}</p>
         <hr />

         <h2>Array</h2>
         <button onClick={this.displayArray}>SET ARRAY AND DISPLAY</button>
         {this.state.car_companies.map((car,i)=>{
            return <p key={i} onClick={()=>{this.handleDelete(i)}}>{car}</p>
         })}
        </div>
    }
}