import React from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Desgentable from './Desgentable';


export default class listDesgen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      de: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/de')
      .then(res => {
        this.setState({
          de: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.au.map((res, i) => {
      return <Desgentable obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
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
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}