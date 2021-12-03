import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class NavBar3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Navbar  style={{backgroundColor: "#3B3B45", color: "#FFBF00", marginTop: 90}}>
                <Container>
                    <Navbar.Brand href="#home" style={{color:"#ffbf00"}}>SIGSO</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/Inicio" style={{color:"#ffbf00"}}>Inicio</Nav.Link>
                        <Nav.Link href="/DesempenoGeneral" style={{color:"#ffbf00"}}>Desempeño General</Nav.Link>
                        <Nav.Link href="/Incidentes" style={{color:"#ffbf00"}}>Incidentes</Nav.Link>
                        <Nav.Link href="/CondicionesInseguras" style={{color:"#ffbf00"}}>Condiciones Inseguras</Nav.Link>                        
                        <Nav.Link href="/SaludOcupacional" style={{color:"#ffbf00"}}>Salud Ocupacional</Nav.Link>
                        <Nav.Link href="/Ausentismo" style={{color:"#ffbf00"}}>Ausentismo</Nav.Link>
                        
                    </Nav>
                </Container>
        </Navbar>

        );
    }
}
