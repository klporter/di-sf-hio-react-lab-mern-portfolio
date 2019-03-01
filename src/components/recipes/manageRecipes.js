import React, {Component} from "react";

import {setKeyWithString} from "../../utilities"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DataService from "../../services/dataService";
import RecipeTable from "./recipeTable";
import RecipeForm from "./recipeForm";

class ManageRecipes extends Component {

    constructor(props) {
        super(props);
        this.client = new DataService("recipe");
    }

    componentDidMount() {
        this.getRecipes();
    }

    getRecipes = async () => {
        let recipes = await this.client.read();
        this.props.updateRecipes(recipes.data);
    };

    showAddForm = () => {
        this.props.showRecipeForm();
    };

    showEditForm = async (recipeId) => {
        let response = await this.client.read(recipeId);
        this.props.updateRecipe(response.data);
        this.props.showRecipeForm();
    };

    handleDelete = async (recipeId) => {
        await this.client.delete(recipeId);
        await this.getRecipes();
    };

    hideForm = () => {
        this.props.hideForm();
    };

    handleFormChange = (event) => {

        let newRecipe = this.props.recipe;
        let value = event.target.value;

        //if ingredients the split on newline to build array
        if (event.target.name === "ingredients") {
            value = event.target.value.split("\n")
        }
        setKeyWithString(newRecipe, event.target.name, value);
        this.props.updateRecipe(newRecipe);
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();
        if (this.props.recipe._id) {
            await this.client.update(this.props.recipe, this.props.recipe._id);
        } else {
            await this.client.create(this.props.recipe);
        }
        await this.getRecipes();
        this.hideForm()
    };

    render() {
        console.log(`Show form: ${this.props.showForm}`);
        if (this.props.showForm) {
            return <RecipeForm hideForm={this.hideForm} recipe={this.props.recipe} handleChange={this.handleFormChange}
                               handleSubmit={this.handleFormSubmit}/>;
        }

        return (
            <Container style={{paddingTop: 20}}>
                <h2>Manage Recipes</h2>
                <br/>
                <Button onClick={this.showAddForm}>Add Recipe</Button>
                <br/>
                <br/>
                <RecipeTable recipes={this.props.recipes} showEditForm={this.showEditForm} handleDelete={this.handleDelete}/>
            </Container>
        )
    }

}

export default ManageRecipes;