import { Component } from "react";
export class Profile extends Component{

    render(){
        let Profile=[{src:'./images/images.jpg',title:'sachin'},
        {src:'./images/dhoni.jpg',title:'dhoni'},
        {src:'./images/kohli.jpg',title:'kohli'}
    ];
        return <div>
            <center><h3>Images of Players</h3>
            <hr />
            {Profile.map((i)=><img src={i.src} title={i.title} height="300" width="250"/>)}</center>
        </div>
        
    }

}