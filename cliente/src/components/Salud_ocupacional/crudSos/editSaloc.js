import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helpers";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationProps from "../../prompts/confirmation";

export default class SosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idSo: this.props.getIdSo(),
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
      so: {
        sede: "",
        proceso: "",
        tipo_enfermedad: "",
        tipo_trabajador: "",
        validacion: "",
        creado_por: "",
        fecha: "",
        lider_investigacion: "",
        validacion_investigacion: "",
    },
  };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {
    this.getSo();
  }
  getSo() {
    this.setState({ loading: true });
    request
      .get(`/so/${this.state.idSo}`)
      .then((response) => {
        this.setState({
          so: response.data,
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
      so: {
        ...this.state.so,
        [index]: value,
      },
    });
  }
  guardarSos() {
    this.setState({ loading: true });
    request
      .put(`/so/${this.state.idSo}`, this.state.so)
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
      this.guardarSos()
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
          <h1>Editar Enfermedad</h1>
        </Row>
        <Row>
          <Form>
            

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Sede</Form.Label>
              <Form.Control
                value={this.state.so.sede}
                onChange={(e) => this.setValue("sede", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Proceso</Form.Label>
              <Form.Control
                value={this.state.so.proceso}
                onChange={(e) => this.setValue("proceso", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo Enfermedads</Form.Label>
              <Form.Control
                value={this.state.so.tipo_enfermedad}
                onChange={(e) => this.setValue("tipo_enfermedad", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo Trabajador</Form.Label>
              <Form.Control
                value={this.state.so.tipo_trabajador}
                onChange={(e) => this.setValue("tipo_trabajador", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Validacion</Form.Label>
              <Form.Control
                value={this.state.so.validacion}
                onChange={(e) => this.setValue("validacion", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Creado Por</Form.Label>
              <Form.Control
                value={this.state.so.creado_por}
                onChange={(e) => this.setValue("creado_por", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                value={this.state.so.fecha}
                onChange={(e) => this.setValue("fecha", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Lider Investigacion</Form.Label>
              <Form.Control
                value={this.state.so.lider_investigacion}
                onChange={(e) => this.setValue("lider_investigacion", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Validacion Investigacion</Form.Label>
              <Form.Control
                value={this.state.so.validacion_investigacion}
                onChange={(e) => this.setValue("validacion_investigacion", e.target.value)} />
            </Form.Group>

            <Button id="btn-enviar" variant="primary" onClick={() => this.setState({
              confirmation: { ...this.state.confirmation, show: true },
            })}>
              Guardar Enfermedad
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
