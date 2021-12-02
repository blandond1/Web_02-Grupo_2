import React from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Saloctable from './Saloctable';


export default class ListSaloc extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      so: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/so')
      .then(res => {
        this.setState({
          so: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.au.map((res, i) => {
      return <Saloctable obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
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
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}