import {combineReducers} from "redux";
import recipes from "./recipes/recipes";
import jeopardy from "./jeopardy/jeopardy";

const portfolioApp = combineReducers({recipes, jeopardy});

export default portfolioApp;