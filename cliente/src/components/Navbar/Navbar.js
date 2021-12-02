import React from "react";
import { Container, Nav, Navbar, DropdownButton, Dropdown, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import IssieLogo from "../Img/issielogo.png";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    cookies.remove("_s");
    window.location.reload();
  }

  render() {
    return (
      <Navbar fixed="top" id="navbar" style={{ backgroundColor: "#00FFFF" }}>
        <Container>
          <img className="img-logo" src={IssieLogo} alt="SISO" />
          <Navbar.Brand href="#home">
            ISSIEVOICE <span id="usuario-sub-branm"></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>*/}
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Usuario">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Row>
                <Row>USUARIO</Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => this.logout()}>Cerrar Sesion</Dropdown.Item>
              {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
