import React from 'react';
import { request } from '../../helper/helpers';
import { Container, Row } from 'react-bootstrap';

//import './empleados.css';
import DataGrid from '../../grid/gridAus';
import ConfirmationProps from '../../prompts/confirmation';
import Loading from '../../Loading/Loading';
import MessagePrompt from '../../prompts/message';


const columns = [
  {
    dataField: '_id',
    text: 'Id',
  },
  {
    dataField: 'fecha_inicio',
    text: 'Fecha Inicio',
  },
  {
    dataField: 'fecha_final',
    text: 'Fecha Final',
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
    dataField: 'dias_totales',
    text: 'Dias Totales',
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

];

export default class AusBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idAu: null,
      confirmation: {
        title: 'Eliminar la incapacidad',
        text: 'Desea eliminar la incapacidad?',
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
    this.props.setIdAu(row._id);
    this.props.changeTab('editar');
  }
  onClickDeleteButton(row) {
    this.setState({
      idAu: row._id,
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
      this.eliminarAu()
    );
  }
  eliminarAu() {
    this.setState({ loading: true });
    request
      .delete(`/au/${this.state.idAu}`)
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
          <h1>Lista de Incapacidades</h1>
        </Row>

        <Row>
          <DataGrid url="/au" columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}/>
        </Row>
      </Container>
    );
  }
}