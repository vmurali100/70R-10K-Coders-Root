import { Component } from "react";

export default class NikkiClass extends Component{
    constructor(){
        super()
        this.state={
            // users: ["Ker","Sri","Ram"]
            person:{
                "address": {
                    "geolocation": {
                      "lat": "40.3467",
                      "long": "-30.1310"
                    },
                    "city": "Cullman",
                    "street": "Frances Ct",
                    "number": 86,
                    "zipcode": "29567-1452"}
                
                  
    },
            }

        }

    render(){
    return <div>
        {//this.state.users.map((val,i)=>{//map used to generate new array values.
            //return<p key={i}>{val}</p>//key:used for unique identification.

        //)}//
    
        }
    {Object.keys(this.state.person).map((val,i)=>{
        return <p key={i}>{val}:-{this.state.person[val]}</p>

    })}
    </div>
    }
}