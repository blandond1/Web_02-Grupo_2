import React from "react";
import { Container, Row, Nav } from "react-bootstrap";
import IncBuscar from "../Incidentes/crudInc/buscarInc";
import Inccrear from "../Incidentes/crudInc/createIncidente";
import IncEditar from '../Incidentes/crudInc/editIncidente';


import './inc.css';

export default class In extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'buscar',
            _id: null,
        };

        this.changeTab = this.changeTab.bind(this);
        this.setIdAIn = this.setIdIn.bind(this);
        this.getIdIn = this.getIdIn.bind(this);
    }
    changeTab(tab) {
        this.setState({
            currentTab: tab,
        });
    }
    setIdIn(id) {
        this.setState({ _id: id })
    }
    getIdIn() {
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
                            <Nav.Link eventKey="buscar">Buscar Incidente</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear Incidente</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ? (
                        <IncBuscar changeTab={this.changeTab}
                            setIdIn={this.setIdIn}
                        />
                    ) : this.state.currentTab === 'crear' ? (
                        <Inccrear changeTab={this.changeTab} />
                    ) : (
                        <IncEditar
                            changeTab={this.changeTab}
                            getIdIn={this.getIdIn} />
                    )}
                </Row>
            </Container>

        );
    }
}