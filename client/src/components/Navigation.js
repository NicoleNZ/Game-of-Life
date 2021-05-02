import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import  Nav  from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router'; 
import { useEffect } from "react";

const Navigation = () => {
    
    const history = useHistory();

    useEffect((history, token) => {
        // console.log(token) here to check what 'no token' returns
    if (token === null) {
        history.replace('/')
        }
    }, []);

    const logoutButtonClick = () => {
        window.localStorage.removeItem('token');
        history.replace('/');
    };

    return (
        <Router>
            <Navbar className="navbar" expand="lg">
            <Navbar.Brand className="header">Nicole's Game of Light</Navbar.Brand>
            <br></br>
            <Nav>
                <Nav.Item>
                    <Link className="nav-link" to="/logout" onClick={logoutButtonClick}>Logout</Link>    
                </Nav.Item>  
            </Nav>
            <Navbar.Brand className="tagline">Based on Conway's Game of Life</Navbar.Brand>
            </Navbar>
        </Router>
    );
};

export { Navigation };