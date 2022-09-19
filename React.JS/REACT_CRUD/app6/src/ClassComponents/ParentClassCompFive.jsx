import { Component } from "react";
import { ChildClassFive } from "./ChildClassCompFive";


export class ParentClassFive extends Component {
    constructor() {
        super()
        this.state = {
            team: "India",
            playerDetails: {
                captain: "Rohith Sharma",
                VC: "KL Rahul"
            },
            coach: ["Rahul Dravid", "Ramesh"]
        }
    }

    changeTeam = () => {
        this.setState({ team: "Indian Cricket Team" })
    }

    changePlayerDetails = () => {
        this.setState({
            playerDetails: {
                captain: "Rohith Sharma",
                VC: "KL Rahul",
                Wicket_keeper : "R Pant"
            }
        })
    }

    changeCoach = () => {
        this.setState({ coach: ["Dravid", "Laxman"] })
    }

    render() {
        return <div>
            <h2> I am from Parent Class Five</h2>
            <hr />
            <ChildClassFive
                team={this.state.team}
                playerDetails={this.state.playerDetails}
                coach={this.state.coach}
                changeTeam={this.changeTeam}
                changePlayerDetails={this.changePlayerDetails}
                changeCoach={this.changeCoach} />
        </div>
    }
}