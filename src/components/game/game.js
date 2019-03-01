import React, {Component} from 'react';
import Team from "./team";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resetCount: 0,
            venue: this.props.venue,
            homeTeam: this.props.homeTeam,
            awayTeam: this.props.awayTeam,
        };
        this.state.homeTeam.shotsTaken = 0;
        this.state.homeTeam.score = 0;
        this.state.awayTeam.shotsTaken = 0;
        this.state.awayTeam.score = 0;
        this.goal = new Audio('./assets/soccer.wav');
    }

    homeTeamShoot = () => {
        this.shoot("homeTeam");
    };

    awayTeamShoot = () => {
        this.shoot("awayTeam");
    };

    resetGame = () => {
        this.setState((state, props) => ({
            resetCount: state.resetCount + 1,
            homeTeam: {
                ...state.homeTeam,
                shotsTaken: 0,
                score: 0
            },
            awayTeam: {
                ...state.awayTeam,
                shotsTaken: 0,
                score: 0
            }
        }))
    };

    shoot = (team) => {
        let updatedStats = this.state[team];
        updatedStats.shotsTaken = updatedStats.shotsTaken + 1;
        if (Math.random() >= .5) {
            updatedStats.score = updatedStats.score + 1;
            this.goal.play();
        }

        this.setState((state) => ({
            [team]: updatedStats
        }))
    };

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div>
                    <h1>Home Team</h1>
                    <Team name={this.state.homeTeam.name}
                          logo={this.state.homeTeam.logo}
                          shotsTaken={this.state.homeTeam.shotsTaken}
                          score={this.state.homeTeam.score}
                          shotHandler={this.homeTeamShoot}/>
                </div>
                <div>
                    <h1>Welcome to {this.state.venue}</h1>
                    <b>Game:</b> {this.state.resetCount + 1} <br/> <button onClick={this.resetGame}>Reset Game</button>
                </div>
                <div>
                    <h1>Away Team</h1>
                    <Team name={this.state.awayTeam.name}
                          logo={this.state.awayTeam.logo}
                          shotsTaken={this.state.awayTeam.shotsTaken}
                          score={this.state.awayTeam.score}
                          shotHandler={this.awayTeamShoot}/>
                </div>
            </div>
        )
    }
}

export default Game;