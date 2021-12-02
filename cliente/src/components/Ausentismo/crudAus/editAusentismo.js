import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helpers";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationProps from "../../prompts/confirmation";

export default class AusEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idAu: this.props.getIdAu(),
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
      au: {
        fecha_inicio: "",
        fecha_final: "",
        sede: "",
        proceso: "",
        dias_totales: "",
        tipo_trabajador: "",
        validacion: "",
        creado_por: "",
        fecha: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {
    this.getAu();
  }
  getAu() {
    this.setState({ loading: true });
    request
      .get(`/au/${this.state.idAu}`)
      .then((response) => {
        this.setState({
          au: response.data,
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
      au: {
        ...this.state.au,
        [index]: value,
      },
    });
  }
  guardarAus() {
    this.setState({ loading: true });
    request
      .put(`/au/${this.state.idAu}`, this.state.au)
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
      this.guardarAus()
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
          <h1>Editar Incapacidad</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha Inicio</Form.Label>
              <Form.Control
                value={this.state.au.fecha_inicio}
                onChange={(e) => this.setValue("fecha_inicio", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha Final</Form.Label>
              <Form.Control
                value={this.state.au.fecha_final}
                onChange={(e) => this.setValue("fecha_final", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Sede</Form.Label>
              <Form.Control
                value={this.state.au.sede}
                onChange={(e) => this.setValue("sede", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Proceso</Form.Label>
              <Form.Control
                value={this.state.au.proceso}
                onChange={(e) => this.setValue("proceso", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Dias Totales</Form.Label>
              <Form.Control
                value={this.state.au.dias_totales}
                onChange={(e) => this.setValue("dias_totales", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo Trabajador</Form.Label>
              <Form.Control
                value={this.state.au.tipo_trabajador}
                onChange={(e) => this.setValue("tipo_trabajador", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Validacion</Form.Label>
              <Form.Control
                value={this.state.au.validacion}
                onChange={(e) => this.setValue("validacion", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Creado Por</Form.Label>
              <Form.Control
                value={this.state.au.creado_por}
                onChange={(e) => this.setValue("creado_por", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                value={this.state.au.fecha}
                onChange={(e) => this.setValue("fecha", e.target.value)} />
            </Form.Group>

            <Button id="btn-enviar" variant="primary" onClick={() => this.setState({
              confirmation: { ...this.state.confirmation, show: true },
            })}>
              Guardar Incapacidad
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
