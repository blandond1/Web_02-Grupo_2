import React from 'react';
import { request } from '../../helper/helpers';
import { Container, Row } from 'react-bootstrap';

//import './empleados.css';
import DataGrid from '../../grid/gridDes';
import ConfirmationProps from '../../prompts/confirmation';
import Loading from '../../Loading/Loading';
import MessagePrompt from '../../prompts/message';


const columns = [
  {
    dataField: '_id',
    text: 'Id',
    hidden: 'Id',
  },
  {
    dataField: 'dias_seguros',
    text: 'Dias Seguros',
  },
  {
    dataField: 'dias',
    text: 'Dias',
  },
  {
    dataField: 'indice_frecuencia',
    text: 'Indice Frecuencia',
  },
  {
    dataField: 'indice_severidad',
    text: 'Indice_Severidad',
  },
  {
    dataField: 'sede',
    text: 'Sede',
  },
  

];

export default class DesBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idDe: null,
      confirmation: {
        title: 'Eliminar informacion',
        text: 'Desea eliminar la informacion?',
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
    this.props.setIdDe(row._id);
    this.props.changeTab('editar');
  }
  onClickDeleteButton(row) {
    this.setState({
      idDe: row._id,
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
      this.eliminarDe()
    );
  }
  eliminarDe() {
    this.setState({ loading: true });
    request
      .delete(`/de/${this.state.idDe}`)
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
      <Container id="empleados-buscar-container">
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
          <h1>Información General</h1>
        </Row>

        <Row>
          <DataGrid url="/de" columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}
          />
        </Row>
      </Container>
    );
  }
}