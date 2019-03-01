import React, { Component } from "react";

import {setKeyWithString} from "../../utilities"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DataService from "../../services/dataService";
import recipeModel from "../../models/recipe"
import RecipeTable from "./recipeTable";
import RecipeForm from "./recipeForm";

class ManageRecipes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            recipe: recipeModel,
            showForm: false
        }
        this.client = new DataService("recipe");
    }

    componentDidMount() {
        this.getRecipes();
    }

    getRecipes = async () => {
        let recipes = await this.client.read()
        this.setState({ recipes: recipes.data })
    }

    showAddForm = (event) => {
        this.setState({
            showForm: true
        })
    }

    hideForm = (event) => {
        this.setState({
            recipe: recipeModel,
            showForm: false
        })
    }

    handleFormChange = (event) => {
        let newRecipe = this.state.recipe; 
        let value = event.target.value

        //if ingredients the split on newline to build array
        if(event.target.name === "ingredients"){
            value = event.target.value.split("\n")
        }
        setKeyWithString(newRecipe, event.target.name, value);
        this.setState({recipe: newRecipe});
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        await this.client.create(this.state.recipe);
        this.getRecipes()
        this.hideForm()
    }   

    render() {

        if(this.state.showForm){
            return <RecipeForm hideForm={this.hideForm} recipe={this.state.recipe} handleChange={this.handleFormChange} handleSubmit={this.handleFormSubmit} />;
        }

        return (
            <Container style={{ paddingTop: 20 }}>
                <h2>Manage Recipes</h2>
                <br/>
                <Button onClick={this.showAddForm}>Add Recipe</Button>
                <br/>
                <br/>
                <RecipeTable recipes={this.state.recipes} />
            </Container>
        )
    }

}

export default ManageRecipes;