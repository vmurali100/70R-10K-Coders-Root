import { Component } from "react";

export default class StudentsClass extends Component{
    constructor(){
        super()
        this.state={
            // users: ["Ker","Sri","Ram"]
            person:{
                 "id": 4,
                 "email": "VPolenz@vitae.io",
                 "username": "pra",
                 "password": "GG1vF"
    },
            }

        }
    


    render(){
    return <div>
        {//this.state.users.map((val,i)=>{//map used to generate new array values.
            //return<p key={i}>{val}</p>//key:used for unique identification.

        //})//
    }
    {Object.keys(this.state.person).map((val,i)=>{
        return <p key={i}>{val}:-{this.state.person[val]}</p>

    })}
    </div>
    }
}