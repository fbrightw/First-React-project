import React, {Component} from "react";
import {links} from "./data"
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default class NavBar extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({value: value});
    }

    render() {
        return (
            <Navbar bg="light" expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0"
                             style={{ maxHeight: '100px' }}
                             navbarScroll>
                            <Nav.Link href="#home">
                                {links[0].svg}Home
                            </Nav.Link>
                            <Nav.Link href="#todo">To do list</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to="/login">
                        {links[2].svg}Login
                    </Link>
                </Container>
            </Navbar>
        )
    }
}
