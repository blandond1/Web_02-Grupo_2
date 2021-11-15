import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class NavBar2 extends React.Component {
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
                        <Nav.Link href="#home">Compañía</Nav.Link>
                        <Nav.Link href="#link">Noticias</Nav.Link>
                        <Nav.Link href="#link">Politica SISO</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>                        
                        <Nav.Link href="../../components/login/Login.js">Iniciar Sesión</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>

        );
    }
}
