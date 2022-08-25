import { Component } from "react";
import { Childtwoclass } from "./Childtwocomp";

export class Parentwoclass extends Component{
    constructor(){
        super()
        this.state={
         
           hlotext:"hloo am from parentwocomp ....... ",

           friends:{
            "fname":"vikas",
            "lname":"school",
            "tel": "(283)872-6964",
            "address": "2926 Sed Dr",
            "city": "Spokane",
            "state": "AL",
            "zip": "74762",
           },

           enemy:["bunty","bubble","munna","bhai"]

        }
    }

    handlermessage=()=>{
        this.setState({hlotext:"iam changed by eventhandler"})
    }

    render(){
        return <div>
            
            <hr />

            {/* {this.state.hlotext} */}
           

            {/* <button onClick={this.handlermessage}>changemessage</button> */}

              {/* {Object.keys(this.state.friends).map((val,i)=>{
                return <p key={i}> {val}:{this.state.friends[val]}</p>
             })}  */}
               
             {/* <p>  {this.state.friends.fname}</p>
              <p> {this.state.friends.lname}</p>
              <p> {this.state.friends.tel}</p> */}
{/* 
             {this.state.enemy.map((val,i)=>{
                return <p key={i}>{val}</p>
             })} */}
             

             {/* <Childtwoclass {...this.state}/>
             <Childtwoclass {...this.state.friends}/> */}

             <Childtwoclass college={this.state.hlotext} school={this.state.friends} enmy={this.state.enemy} changemessage={this.handlermessage}/>
        </div>
    }
}

