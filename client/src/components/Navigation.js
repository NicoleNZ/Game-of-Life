import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Logout } from "./user/Logout";
import  Nav  from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
    return (
        <Router>
            <Navbar className="navbar" expand="lg">
            <Navbar.Brand className="header">Nicole's Game of Light</Navbar.Brand>
            <br></br>
            <Nav>
                <Nav.Item>
                    <Link className="nav-link" to="/logout">Logout</Link>    
                </Nav.Item>  
            </Nav>
            <Navbar.Brand className="tagline">Based on Conway's Game of Life</Navbar.Brand>
            </Navbar>

            <Switch>
                <Route path="/logout">
                    <Logout />
                </Route>
            </Switch>
        </Router>
    );
};

export { Navigation };