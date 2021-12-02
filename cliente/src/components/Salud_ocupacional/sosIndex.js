import React from "react";
import { Container, Row, Nav } from "react-bootstrap";
import SosBuscar from "../Salud_ocupacional/crudSos/buscarSos";
import Soscrear from "../Salud_ocupacional/crudSos/createSaloc";
import SosEditar from '../Salud_ocupacional/crudSos/editSaloc';


import './sos.css';

export default class So extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'buscar',
            _id: null,
        };

        this.changeTab = this.changeTab.bind(this);
        this.setIdSo = this.setIdSo.bind(this);
        this.getIdSo = this.getIdSo.bind(this);
    }
    changeTab(tab) {
        this.setState({
            currentTab: tab,
        });
    }
    setIdSo(id) {
        this.setState({ _id: id })
    }
    getIdSo() {
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
                            <Nav.Link eventKey="buscar">Buscar Enfermedad</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear Enfermedad</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ? (
                        <SosBuscar changeTab={this.changeTab}
                            setIdSo={this.setIdSo}
                        />
                    ) : this.state.currentTab === 'crear' ? (
                        <Soscrear changeTab={this.changeTab} />
                    ) : (
                        <SosEditar
                            changeTab={this.changeTab}
                            getIdSo={this.getIdSo} />
                    )}
                </Row>
            </Container>

        );
    }
}