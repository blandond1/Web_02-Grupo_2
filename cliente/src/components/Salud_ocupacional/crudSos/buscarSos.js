import React from 'react';
import { request } from '../../helper/helpers';
import { Container, Row } from 'react-bootstrap';

//import './empleados.css';
import DataGrid from '../../grid/gridSos';
import ConfirmationProps from '../../prompts/confirmation';
import Loading from '../../Loading/Loading';
import MessagePrompt from '../../prompts/message';


const columns = [
  {
    dataField: '_id',
    text: 'Id',
  },
  {
    dataField: 'sede',
    text: 'Sede',
  },
  {
    dataField: 'proceso',
    text: 'Proceso',
  },
  {
    dataField: 'tipo_enfermedad',
    text: 'tipo_enfermedad',
  },
  {
    dataField: 'tipo_trabajador',
    text: 'Tipo Trabajador',
  },
  {
    dataField: 'validacion',
    text: 'Validación',
  },
  {
    dataField: 'creado_por',
    text: 'Creado Por',
  },
  {
    dataField: 'fecha',
    text: 'Fecha',
  },
  {
    dataField: 'lider_investigacion',
    text: 'lider_investigacion',
  },
  {
    dataField: 'validacion_investigacionl',
    text: 'validacion_investigacion',
  },

];

export default class SosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idEmpleado: null,
      confirmation: {
        title: 'Eliminar enfermedad',
        text: 'Desea eliminar la enfermedad?',
        show: false,
      },
      message: {
        text: '',
        show: false,
      },
    };
    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {
    
  }
  onClickEditButton(row) {
    this.props.setIdEmpleado(row._id);
    this.props.changeTab('editar');
  }
  onClickDeleteButton(row) {
    this.setState({
      idSo: row._id,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
  }
  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }
  onConfirm() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    },
      this.eliminarSo()
    );
  }
  eliminarSo() {
    this.setState({ loading: true });
    request
      .delete(`/so/${this.state.idSo}`)
      .then((response) => {
        this.setState({
          loading: false,
          message: {
            text: response.data.msg,
            show: true,
          },
        });
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <Container id="ausentismo-buscar-container">
        <Row>
          <h1>Lista de Enfermedades Profesionales</h1>
        </Row>

        <Row>
          <DataGrid url="/so" columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}/>
        </Row>
      </Container>
    );
  }
}