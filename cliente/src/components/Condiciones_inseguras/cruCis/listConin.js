import React from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Conintable from './Conintable';


export default class ListConin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ci: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/de')
      .then(res => {
        this.setState({
          ci: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.au.map((res, i) => {
      return <Conintable obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>

            <th>Id</th>
            <th>Dias Seguros</th>
            <th>Dias</th>
            <th>Indice Frecuencia </th>
            <th>Indice Severidad </th>
            <th>Sede </th>
            
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}