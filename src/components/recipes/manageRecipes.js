import React, { Component } from "react";

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import DataService from "../../services/dataService";

import { Link } from "react-router-dom"

class ManageRecipes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipes: []
        }
        this.client = new DataService("recipe");
    }

    async componentDidMount() {
        let recipes = await this.client.read()
        this.setState({ recipes: recipes.data })
    }

    render() {

        let rows = this.state.recipes.map((recipe) => {
            return (
                <tr key={recipe._id}>
                    <td>{recipe.name}</td>
                    <td>{recipe.author.name}</td>
                    <td>{recipe.ingredients.join(", ")}</td>
                    <td>{recipe.averageCost}</td>
                    <td style={{whiteSpace:"nowrap"}}>
                        <Button>Edit</Button>&nbsp;
                        <Button variant="danger">Delete</Button>
                    </td>
                </tr>
            )
        })

        return (
            <Container style={{ paddingTop: 20 }}>
                <h2>Manage Recipes</h2>
                <br/>
                <Link to="/recipes/add"><Button>Add Recipe</Button></Link>
                <br/>
                <br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Ingredients</th>
                            <th>AverageCost</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </Container>
        )
    }

}

export default ManageRecipes;