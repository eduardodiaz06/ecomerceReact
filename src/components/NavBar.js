import React, {Component} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import CartWidget from './CartWidget';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand href="#home">Herramientas E.D</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#link"><CartWidget/>0</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>
        )
}
}