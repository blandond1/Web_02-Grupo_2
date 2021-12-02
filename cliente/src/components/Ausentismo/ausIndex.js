import React from "react";
import { Container, Row, Nav } from "react-bootstrap";
import AusBuscar from "../Ausentismo/crudAus/buscarAus";
import Auscrear from "../Ausentismo/crudAus/createAusentismo";
import AusEditar from '../Ausentismo/crudAus/editAusentismo';


import './aus.css';

export default class Au extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'buscar',
            _id: null,
        };

        this.changeTab = this.changeTab.bind(this);
        this.setIdAu = this.setIdAu.bind(this);
        this.getIdAu = this.getIdAu.bind(this);
    }
    changeTab(tab) {
        this.setState({
            currentTab: tab,
        });
    }
    setIdAu(id) {
        this.setState({ _id: id })
    }
    getIdAu() {
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
                            <Nav.Link eventKey="buscar">Buscar Incapacidad</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear Incapacidad</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ? (
                        <AusBuscar changeTab={this.changeTab}
                            setIdAu={this.setIdAu}
                        />
                    ) : this.state.currentTab === 'crear' ? (
                        <Auscrear changeTab={this.changeTab} />
                    ) : (
                        <AusEditar
                            changeTab={this.changeTab}
                            getIdAu={this.getIdAu} />
                    )}
                </Row>
            </Container>

        );
    }
}