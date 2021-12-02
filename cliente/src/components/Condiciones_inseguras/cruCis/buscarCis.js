import React from 'react';
import { request } from '../../helper/helpers';
import { Container, Row } from 'react-bootstrap';

//import './empleados.css';
import DataGrid from '../../grid/gridCis';
import ConfirmationProps from '../../prompts/confirmation';
import Loading from '../../Loading/Loading';
import MessagePrompt from '../../prompts/message';


const columns = [
  {
    dataField: '_id',
    text: 'Id',
  },
  {
    dataField: 'observador',
    text: 'Observador',
  },
  {
    dataField: 'sede',
    text: 'Sede',
  },
  {
    dataField: 'tipo_riesgo',
    text: 'Tipo Riesgo',
  },
  
  {
    dataField: 'nivel_riesgo',
    text: 'Nivel Riesgo',
  },
  {
    dataField: 'fecha',
    text: 'Fecha',
  },
  {
    dataField: 'responsable',
    text: 'Responsable',
  },
  {
    dataField: 'descripcion',
    text: 'Descripcion',
  },
  {
    dataField: 'anexos',
    text: 'Anexos',
  },
  

];

export default class CisBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idCi: null,
      confirmation: {
        title: 'Eliminar condicion insegura',
        text: 'Desea eliminar la condicion insegura?',
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
      idEmpleado: row._id,
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
      this.eliminarCi()
    );
  }
  eliminarCi() {
    this.setState({ loading: true });
    request
      .delete(`/ci/${this.state.idEmpleado}`)
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
      <Container id="empleado-buscar-container">
        <ConfirmationProps
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <Loading show={this.state.loading}
        />
        <Row>
          <h1>Lista de Condiciones Inseguras</h1>
        </Row>

        <Row>
          <DataGrid url="/ci" columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}/>
        </Row>
      </Container>
    );
  }
}