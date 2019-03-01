import React, { Component } from "react";

import { setKeyWithString } from "../../utilities";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DataService from "../../services/dataService";

import { Link } from "react-router-dom"

class AddRecipe extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipe: {
                name: "",
                author: {
                    "name": "",
                    "email": ""
                },
                ingredients: [],
                averageCost: ""
            }
        }
        this.client = new DataService("recipe");
    }

    handleChange = (event) => {
        let newRecipe = this.state.recipe; 
        let value = event.target.value

        //if ingredients the split on newline to build array
        if(event.target.name === "ingredients"){
            value = event.target.value.split("\n")
        }
        setKeyWithString(newRecipe, event.target.name, value);
        this.setState({recipe: newRecipe});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.client.create(this.state.recipe);
        this.props.history.push('/recipes')
    }   

    render() {

        //split ingredients array into separate lines for text area
        const ingredients = this.state.recipe.ingredients.join("\n")

        return (
            <Container style={{ paddingTop: 20 }}>
                <h2>Add Recipe</h2>
                <Link to="/recipes">Back to Recipes</Link>
                <br/>
                <br/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.handleChange} name="name" value={this.state.recipe.name} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control onChange={this.handleChange} name="author.name" value={this.state.recipe.author.name} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author Email</Form.Label>
                        <Form.Control onChange={this.handleChange} name="author.email" value={this.state.recipe.author.email} type="text" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Ingredients (put each ingredient on its own line)</Form.Label>
                        <Form.Control onChange={this.handleChange} name="ingredients" value={ingredients} as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Average Cost</Form.Label>
                        <Form.Control onChange={this.handleChange} name="averageCost" value={this.state.recipe.averageCost} type="text" />
                    </Form.Group>
                    <div className="text-right">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        )
    }

}

export default AddRecipe;