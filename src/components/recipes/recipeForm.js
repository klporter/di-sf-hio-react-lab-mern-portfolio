import React, { Component } from "react";


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class RecipeForm extends Component {

    render() {

        //split ingredients array into separate lines for text area
        const ingredients = this.props.recipe.ingredients.join("\n")

        return (
            <Container style={{ paddingTop: 20 }}>
                <h2>Add Recipe</h2>
                <Button onClick={this.props.hideForm}>Back to Recipes</Button>
                <br/>
                <br/>
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.props.handleChange} name="name" value={this.props.recipe.name} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control onChange={this.props.handleChange} name="author.name" value={this.props.recipe.author.name} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author Email</Form.Label>
                        <Form.Control onChange={this.props.handleChange} name="author.email" value={this.props.recipe.author.email} type="text" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Ingredients (put each ingredient on its own line)</Form.Label>
                        <Form.Control onChange={this.props.handleChange} name="ingredients" value={ingredients} as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Average Cost</Form.Label>
                        <Form.Control onChange={this.props.handleChange} name="averageCost" value={this.props.recipe.averageCost} type="text" />
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

export default RecipeForm;