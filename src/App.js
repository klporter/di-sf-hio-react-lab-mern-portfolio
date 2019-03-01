import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"

import Navigation from './components/navigation/navigation';
import Welcome from './components/welcome/welcome';
import ManageRecipes from './components/recipes/manageRecipes';
import AddRecipe from "./components/recipes/addRecipe"


class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/recipes" component={ManageRecipes} />
          <Route path="/recipes/add" component={AddRecipe} />
        </Switch>
      </div>
    );
  }
}

export default App;
