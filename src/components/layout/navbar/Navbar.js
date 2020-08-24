import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import Home from '../../home/Home';
import Contact from '../../contact/Contact';
import GameDetail from '../../games/GameDetail';
import { GiGamepad } from 'react-icons/gi';

function Menu() {
    return (
        <Router>
            <Navbar variant="dark" expand="lg">
                <NavLink to="/">
                    <Navbar.Brand>Games <GiGamepad/></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/" exact>
                            Home
                        </NavLink>
                        <NavLink to="/contact/">
                            Contact Us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/games/:id" component={GameDetail} />
                </Switch>
            </Container>
        </Router >
    )
}

export default Menu;