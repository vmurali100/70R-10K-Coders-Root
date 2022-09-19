import { Component } from "react";

export class ClassFive extends Component {
    constructor() {
        super()
        this.state = {
            string: "",
            posts: {},
            array: []
        }
    }

    changeString = () => {
        this.setState({
            string: "Hi I am a String"
        })
    }

    changeObject = () => {
        this.setState({
            posts: {
                "id": 5,
                "title": "nesciunt quas odio",
                "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
            },
        })
    }

    changeArray=()=>{
        this.setState({
            array : ["Prudhvi","dhar","Rathna"]
        })
    }

    handleDelete=(i)=>{
        // we cannot directly delete the array elements so we need to copy the array into newArray element
        let newArray = [...this.state.array]; // copies array into new varilable newArray
        newArray.splice(i,1)
        this.setState({array : newArray}) // newArray is now assigned to the old array element
    }

    render() {
        return <div>
            <h2>String</h2>
            <button onClick={this.changeString}>SET STRING</button>
            <p>The String is : {this.state.string}</p>
            <hr />

            <h2>Object</h2>
            <button onClick={this.changeObject}>SET OBJECT PROPERTIES</button>
            <p>{this.state.posts.id}</p>
            <p>{this.state.posts.title}</p>
            <p>{this.state.posts.body}</p>
            <hr />

            <h2>Array</h2>
            <button onClick={this.changeArray}>SET ARRAY ELEMENTS</button>
            {this.state.array.map((user,i)=>{
                return <p onClick={()=>{this.handleDelete(i)}}key={i}>{user}</p>
            })}
        </div>
    }
}