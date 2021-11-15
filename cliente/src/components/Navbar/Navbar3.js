import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default class NavBar3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                    </Container>
                </Navbar>
                <br />
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand>Brand text</Navbar.Brand>
                    </Container>
                </Navbar>
                <br />
                <Navbar bg="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <br />
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            React Bootstrap
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>

        );
    }
}