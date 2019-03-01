import React from "react";

function Team(props) {
    let percentage;
    if (props.shotsTaken > 0) {
        percentage = (<div>Shot Percentage: {Math.round((props.score / props.shotsTaken) * 100)}%</div>);
    }

    return (
        <div>
            <div><h2>{props.name}</h2></div>
            <img src={props.logo} alt=""/>
            <div>Shots taken: {props.shotsTaken}</div>
            <div>Score: {props.score}</div>
            {percentage}
            <button onClick={props.shotHandler}>Shoot!</button>
        </div>
    )
}

export default Team;