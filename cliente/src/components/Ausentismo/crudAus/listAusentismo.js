import React from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AusTable from '../Austable';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class AusentismoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      au: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/au')
      .then(res => {
        this.setState({
          au: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.au.map((res, i) => {
      return <AusTable obj={res} key={i} />;
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