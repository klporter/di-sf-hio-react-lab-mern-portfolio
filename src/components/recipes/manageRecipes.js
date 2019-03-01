import React, {Component} from "react";

import {setKeyWithString} from "../../utilities"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DataService from "../../services/dataService";
import recipeModel from "../../models/recipe"
import RecipeTable from "./recipeTable";
import RecipeForm from "./recipeForm";

class ManageRecipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            recipe: recipeModel,
            showForm: false
        };
        this.client = new DataService("recipe");
    }

    componentDidMount() {
        this.getRecipes();
    }

    getRecipes = async () => {
        let recipes = await this.client.read();
        this.setState({recipes: recipes.data})
    };

    showAddForm = (event) => {
        this.setState({
            showForm: true
        })
    };

    showEditForm = async (recipeId) => {
        let response = await this.client.read(recipeId);
        this.setState({
            recipe: response.data,
            showForm: true
        })
    };

    handleDelete = async (recipeId) => {
        await this.client.delete(recipeId);
        await this.getRecipes();
    };

    hideForm = (event) => {
        this.setState({
            recipe: recipeModel,
            showForm: false
        })
    };

    handleFormChange = (event) => {
        let newRecipe = this.state.recipe;
        let value = event.target.value;

        //if ingredients the split on newline to build array
        if (event.target.name === "ingredients") {
            value = event.target.value.split("\n")
        }
        setKeyWithString(newRecipe, event.target.name, value);
        this.setState({recipe: newRecipe});
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();
        if (this.state.recipe._id) {
            await this.client.update(this.state.recipe, this.state.recipe._id);
        } else {
            await this.client.create(this.state.recipe);
        }
        await this.getRecipes();
        this.hideForm()
    };

    render() {

        if (this.state.showForm) {
            return <RecipeForm hideForm={this.hideForm} recipe={this.state.recipe} handleChange={this.handleFormChange}
                               handleSubmit={this.handleFormSubmit}/>;
        }

        return (
            <Container style={{paddingTop: 20}}>
                <h2>Manage Recipes</h2>
                <br/>
                <Button onClick={this.showAddForm}>Add Recipe</Button>
                <br/>
                <br/>
                <RecipeTable recipes={this.state.recipes} showEditForm={this.showEditForm} handleDelete={this.handleDelete}/>
            </Container>
        )
    }

}

export default ManageRecipes;