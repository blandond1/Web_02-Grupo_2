import React from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Incidentestable from './Incidentestable';


export default class Listincidente extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sgoDB: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/sgoDB')
      .then(res => {
        this.setState({
          sgoDB: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.au.map((res, i) => {
      return <Incidentestable obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha </th>
            <th>Sede </th>
            <th>Creador </th>
            <th>Proceso </th>
            <th>Validacion </th>
            <th>Descripcion Incidente </th>
            <th>Investigador Lider </th>
            <th>Severidad </th>
            <th>Tipo Incidente </th>
            <th>Tipo Trabajador </th>
            <th>Validación Investigacion </th>
            <th>Dias Perdidos </th>
            <th>Date </th>
            <th>Activo </th>
            
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}