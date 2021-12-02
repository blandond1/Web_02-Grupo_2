import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

import "bootstrap/dist/css/bootstrap.css";

//import { Link } from "react-router-dom";

export default class NavBar7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SIGSO - Desempeño General</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Inicio">Inicio</Nav.Link>
            <Nav.Link href="/DesempenoGeneral">Desempeño General</Nav.Link>
            <Nav.Link href="Incidentes">Incidentes</Nav.Link>
            <Nav.Link href="/CondicionesInseguras">Condiciones Inseguras</Nav.Link>
            <Nav.Link href="/SaludOcupacional">Salud Ocupacional</Nav.Link>
            <Nav.Link href="/Ausentismo">Ausentismo</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
