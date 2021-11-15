import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";
export default class NavBar4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SIGSO</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="../../Pages/Inicio.js">Inicio</Nav.Link>
                        <Nav.Link href="../../Pages/DesempenoGeneral.js">Desempeño General</Nav.Link>
                        <Nav.Link href="../../Pages/Incidentes.js">Incidentes</Nav.Link>
                        <Nav.Link href="../../Pages/CondicionesInseguras.js">Condiciones Inseguras</Nav.Link>                        
                        <Nav.Link href="../../Pages/SaludOcupacional.js</Nav>">Salud Ocupacional</Nav.Link>
                        <Nav.Link href="../../Pages/Ausentismo.js</Nav>">Ausentismo</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        );
    }
}
