import React from "react";
import Game from "./game";

function Display(props) {
    return (
        <div>
            <Game venue="Providence Park"
                  homeTeam={{name: "Portland Timbers", logo: "./assets/timbers.png"}}
                  awayTeam={{name: "Seattle Sounders", logo: "./assets/sounders.png"}}/>
            <Game venue="CenturyLink Field"
                  homeTeam={{name: "Seattle Sounders", logo: "./assets/sounders.png"}}
                  awayTeam={{name: "Portland Timbers", logo: "./assets/timbers.png"}}/>
        </div>
    )
}

export default Display;