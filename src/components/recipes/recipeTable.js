import React, { Component } from "react";

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class RecipeTable extends Component {

    render() {

        let rows = this.props.recipes.map((recipe) => {
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

export default RecipeTable;