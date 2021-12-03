import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class NavBar2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Navbar style={{backgroundColor: "#8ec5e8", marginTop: 70}}>
                <Container>
                    <Navbar.Brand href="#home">SIGSO - Pagina Principal</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/compania">Compañía</Nav.Link>
                        <Nav.Link href="/noticias">Noticias</Nav.Link>
                        <Nav.Link href="/politicaSISO">Politica SISO</Nav.Link>
                        <Nav.Link href="/contacto">Contacto</Nav.Link>                        
                        <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>

        );
    }
}
