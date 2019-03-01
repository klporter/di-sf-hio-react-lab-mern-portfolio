import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { LinkContainer } from "react-router-bootstrap";


class Navigation extends Component {

    render() {
        return (

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">React Training Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer exact to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/recipes">
                            <Nav.Link>Manage Recipes</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/jeopardy">
                            <Nav.Link>Jeopardy</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/game">
                            <Nav.Link>Game</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }

}

export default Navigation;