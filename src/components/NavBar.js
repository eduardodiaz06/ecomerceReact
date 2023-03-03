import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import '../components/NavBar.css';


export default class NavBar extends Component {
  render() {
    return (

      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container>
            <Navbar.Brand>  <Link class="barra" to="/">Herramientas E.D.</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link > <Link class="barra" to="/producto">Productos</Link></Nav.Link>
                <Nav.Link href="#link"><CartWidget  class="barra" />0</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


      </div>
    )
  }
}