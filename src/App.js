import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom"

import Navigation from './components/navigation/navigation';
import Welcome from './components/welcome/welcome';
import RecipesContainer from "./containers/recipes/recipesContainer";
import JeopardyContainer from "./containers/jeopardy/jeopardyContainer";
import Game from "./components/game/game";


class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/recipes" component={RecipesContainer}/>
                    <Route exact path="/jeopardy" component={JeopardyContainer}/>
                    <Route exact path="/game" component={Game}/>
                </Switch>
            </div>
        );
    }
}

export default App;
