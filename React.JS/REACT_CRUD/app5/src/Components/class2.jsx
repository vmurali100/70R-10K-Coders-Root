import { Component } from "react";

export class ClassTwo extends Component{
    constructor(){
        super()
        this.state = {
           welcome : "",
           users : {},
           Numbers : []
        }
    }

    changeString=()=>{
        this.setState({
            welcome:"Welcome to app5 class component"
        })
    }

    changeObject=()=>{
        this.setState({
            users : {
                "id1": 1,
                "id": 5,
                "title": "natus nisi omnis corporis facere molestiae rerum in",
                "url": "https://via.placeholder.com/600/f66b97",
                "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
            }
        })
    }

    displayArray=()=>{
        this.setState({
        Numbers : [10,20,30,40,50,60]
        })
    }

    handleDelete=(i)=>{
        let newArray = [...this.state.Numbers]
        newArray.splice(i,1)
        this.setState({Numbers : newArray})
    }

    render(){
        return <div>
         <h2>String</h2>
         <button onClick={this.changeString}>SET STRING</button>
         <p>My Full Name is : {this.state.welcome}</p>
         <hr />

         <h2>Object</h2>
         <button onClick={this.changeObject}>SET OBJECT PROPERTIES AND DISPLAY</button>
         <p>{this.state.users.id1}</p>
         <p>{this.state.users.id}</p>
         <p>{this.state.users.title}</p>
         <p>{this.state.users.url}</p>
         <p>{this.state.users.thumbnailUrl}</p>
         <hr />

         <h2>Array</h2>
         <button onClick={this.displayArray}>SET ARRAY AND DISPLAY</button>
         {this.state.Numbers.map((user,i)=>{
            return <p key={i} onClick={()=>{this.handleDelete(i)}}>{user}</p>
         })}
        </div>
    }
}