import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';

export default class Austable extends React.Component {

    constructor(props) {
        super(props);
        this.deleteAu = this.deleteAu.bind(this);
    }

    deleteAu() {
        axios.delete('http://localhost:3001/au/' + this.props.obj._id)
            .then((res) => {
                console.log('Ausencia successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <td>{this.props.obj.fecha_inicio}</td>
                        <td>{this.props.obj.fecha_final}</td>
                        <td>{this.props.obj.sede}</td>
                        <td>{this.props.obj.proceso}</td>
                        <td>{this.props.obj.dias_totales}</td>
                        <td>{this.props.obj.tipo_trabajador}</td>
                        <td>{this.props.obj.validacion}</td>
                        <td>{this.props.obj.creado_por}</td>
                        <td>{this.props.obj.fecha}</td>
                        <td>
                            <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                                Edit
                            </Link>
                            <Button onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button>
                        </td>
                    </tr>
                </thead>
            </Table>
        );
    }
}


/*import React from "react";
import { Table } from "react-bootstrap";
//import "./Navbar.css";



export default class AusTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Final</th>
                        <th>Sede </th>
                        <th>Proceso </th>
                        <th>Dias Totales </th>
                        <th>Tipo Trabajador </th>
                        <th>Validación </th>
                        <th>Creado Por </th>
                        <th>Fecha </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}*/
