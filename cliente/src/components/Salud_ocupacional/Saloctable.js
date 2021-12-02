import React from "react";
import { Table } from "react-bootstrap";
//import "./Navbar.css";


export default class SalocTable extends React.Component {
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
                        <th>Sede </th>
                        <th>Proceso </th>
                        <th>Tipo Enfermedad </th>
                        <th>Tipo Trabajador </th>
                        <th>Validación </th>
                        <th>Creado Por </th>
                        <th>Fecha </th>
                        <th>Lider Investigacion</th>
                        <th>Validacion Investigacion</th>
                        

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
}
