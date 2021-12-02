import React from "react";
import { Container, Row, Nav } from "react-bootstrap";
import DesBuscar from "../Desempeno_general/crudDes/buscarDes";
import Descrear from "../Desempeno_general/crudDes/createDesgen";
import DesEditar from '../Desempeno_general/crudDes/editDesgen';


import './des.css';

export default class De extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'buscar',
            _id: null,
        };

        this.changeTab = this.changeTab.bind(this);
        this.setIdDe = this.setIdDe.bind(this);
        this.getIdDe = this.getIdDe.bind(this);
    }
    changeTab(tab) {
        this.setState({
            currentTab: tab,
        });
    }
    setIdDe(id) {
        this.setState({ _id: id })
    }
    getIdDe() {
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
                            <Nav.Link eventKey="buscar">Buscar Informacion</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Agregar Informacion</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ? (
                        <DesBuscar changeTab={this.changeTab}
                            setIdDe={this.setIdDe}
                        />
                    ) : this.state.currentTab === 'crear' ? (
                        <Descrear changeTab={this.changeTab} />
                    ) : (
                        <DesEditar
                            changeTab={this.changeTab}
                            getIdDe={this.getIdDe} />
                    )}
                </Row>
            </Container>

        );
    }
}