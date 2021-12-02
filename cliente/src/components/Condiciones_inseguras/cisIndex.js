import React from "react";
import { Container, Row, Nav } from "react-bootstrap";
import CisBuscar from "../Condiciones_inseguras/cruCis/buscarCis";
import Ciscrear from "../Condiciones_inseguras/cruCis/createConin";
import CisEditar from '../Condiciones_inseguras/cruCis/editConin';


import './cis.css';

export default class Ci extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'buscar',
            _id: null,
        };

        this.changeTab = this.changeTab.bind(this);
        this.setIdCi = this.setIdCi.bind(this);
        this.getIdCi = this.getIdCi.bind(this);
    }
    changeTab(tab) {
        this.setState({
            currentTab: tab,
        });
    }
    setIdCi(id) {
        this.setState({ _id: id })
    }
    getIdCi() {
        return this.state._id;
    }
    render() {
        return (
            <Container id="empleados-container">
                <Row>
                    <Nav
                        fill
                        variant="tabs"
                        defaultActiveKey="buscar"
                        onSelect={(eventKey) => this.setState({ currentTab: eventKey })}>
                        <Nav.Item>
                            <Nav.Link eventKey="buscar">Buscar Condicion Insegura</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear Condicion Insegura</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ? (
                        <CisBuscar changeTab={this.changeTab}
                            setIdCi={this.setIdAu}
                        />
                    ) : this.state.currentTab === 'crear' ? (
                        <Ciscrear changeTab={this.changeTab} />
                    ) : (
                        <CisEditar
                            changeTab={this.changeTab}
                            getIdCi={this.getIdCi} />
                    )}
                </Row>
            </Container>

        );
    }
}