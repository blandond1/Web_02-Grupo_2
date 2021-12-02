import React from "react";
import { Table } from "react-bootstrap";
//import "./Navbar.css";


export default class SgoDBTable extends React.Component {
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
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha </th>
                        <th>Sede </th>
                        <th>Creador </th>
                        <th>Proceso </th>
                        <th>Validación </th>
                        <th>Descrpcion Incidente</th>                        
                        <th>Investigador Lider </th>
                        <th>Severidad </th>
                        <th>Tipo Incidente </th>
                        <th>Tipo Trabajador </th>
                        <th>Validacion Investigacion </th>
                        <th>Dias Perdidos </th>
                        <th>Fecha Reporte </th>
                        <th>Activo </th>
                        
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
