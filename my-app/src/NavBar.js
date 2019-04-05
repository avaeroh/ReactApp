
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Home, AboutPage } from './AppRouter.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const navigationbuttons = [
    <button className="btn btn-primary" href="" onClick={takeMeHome}>Home</button>,
    <button className="btn btn-primary" href="" onClick={takeMeHome}>About</button>,
    <button className="btn btn-primary" href="" onClick={takeMeHome}>Contact</button>]

    const HomeLink = <Link to="/">Home</Link>;

function takeMeHome() {
    alert("clicked!");
}

export class NavBar extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Router>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Jon's website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/random">Random</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success" onClick="takeMeHome" >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Router>
        );
    }
}