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
import styled from 'styled-components';


//Styled components
const StyledNavbar = styled(Navbar)`
    text-transform: uppercase;
    background-color: ${({theme}) => theme.colors.blueGreen};
` 

const StyledLink = styled(NavLink) `
    color: white;
    padding: 10px;

    &:hover {
        font-weight: bold;
        color: white;
        text-decoration: none;
    }
` 

const style = {
    fontWeight: 'bold',
    borderBottom: '2px solid white'
}

const StyledGamepad = styled(GiGamepad)`
    color: ${({theme}) => theme.colors.orange};
    font-size: 50px;

    &:hover {
        transition: .3s;
        color: ${({theme}) => theme.colors.white};
    }
` 

function Menu() {
    return (
        <Router>
            <StyledNavbar variant="dark" expand="lg">
                <NavLink to="/">
                    <Navbar.Brand><StyledGamepad/></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <StyledLink to="/" exact activeStyle={style}>
                            Home
                        </StyledLink>
                        <StyledLink to="/contact/" activeStyle={style}>
                            Contact Us
                        </StyledLink>
                    </Nav>
                </Navbar.Collapse>
            </StyledNavbar>
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