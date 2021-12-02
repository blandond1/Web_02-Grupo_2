import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helpers";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationProps from "../../prompts/confirmation";

export default class DesEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idDe: this.props.getIdDe(),
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      confirmation: {
        show: false,
        title: '',
        text: '',
      },
      loading: false,
      de: {
        dias_seguros: '',
        dias: '',
        indice_frecuencia: '',
        indice_severidad: '',
        sede: ''
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {
    this.getDe();
  }
  getDe() {
    this.setState({ loading: true });
    request
      .get(`/de/${this.state.idDe}`)
      .then((response) => {
        this.setState({
          de: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }
  setValue(index, value) {
    this.setState({
      de: {
        ...this.state.de,
        [index]: value,
      },
    });
  }
  guardarDes() {
    this.setState({ loading: true });
    request
      .put(`/de/${this.state.idAu}`, this.state.de)
      .then((response) => {
        if (response.data.exito) {
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      })
  }
  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab("buscar");
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
      this.guardarDes()
    );
  }
  render() {
    return (
      <Container id="empleados-crear-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <ConfirmationProps
          show={true}
          title=''
          text=''
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Editar Informacion</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Dias Seguros</Form.Label>
              <Form.Control
                value={this.state.de.dias_seguros}
                onChange={(e) => this.setValue("dias_seguros", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Dias</Form.Label>
              <Form.Control
                value={this.state.de.dias}
                onChange={(e) => this.setValue("dias", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Indice Frecuencia</Form.Label>
              <Form.Control
                value={this.state.de.indice_frecuencia}
                onChange={(e) => this.setValue("indice_frecuencia", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Indice Severidad</Form.Label>
              <Form.Control
                value={this.state.de.indice_severidad}
                onChange={(e) => this.setValue("indice_severidad", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Sede</Form.Label>
              <Form.Control
                value={this.state.de.sede}
                onChange={(e) => this.setValue("sede", e.target.value)} />
            </Form.Group>

            <Button id="btn-enviar" variant="primary" onClick={() => this.setState({
              confirmation: { ...this.state.confirmation, show: true },
            })}>
              Guardar Informacion
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
