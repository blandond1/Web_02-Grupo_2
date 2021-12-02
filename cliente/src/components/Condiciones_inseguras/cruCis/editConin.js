import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helpers";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationProps from "../../prompts/confirmation";

export default class CisEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idCi: this.props.getIdCi(),
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
      ci: {
        observador: "",
        sede: "",
        tipo_riesgo: "",
        nivel_riesgo: "",
        fecha: "",
        responsable: "",
        descrpcion: "",
        anexos: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {
    this.getCi();
  }
  getCi() {
    this.setState({ loading: true });
    request
      .get(`/ci/${this.state.idAu}`)
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
      ci: {
        ...this.state.ci,
        [index]: value,
      },
    });
  }
  guardarCis() {
    this.setState({ loading: true });
    request
      .put(`/ci/${this.state.idAu}`, this.state.ci)
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
      this.guardarCis()
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
          <h1>Editar Condicion</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Observador</Form.Label>
              <Form.Control
                value={this.state.ci.Observador}
                onChange={(e) => this.setValue("Observador", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Sede</Form.Label>
              <Form.Control
                value={this.state.ci.sede}
                onChange={(e) => this.setValue("sede", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo Riesgo</Form.Label>
              <Form.Control
                value={this.state.ci.tipo_riesgo}
                onChange={(e) => this.setValue("tipo_riesgo", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nivel Riesgo</Form.Label>
              <Form.Control
                value={this.state.ci.nivel_riesgo}
                onChange={(e) => this.setValue("nivel_riesgo", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                value={this.state.ci.fecha}
                onChange={(e) => this.setValue("fecha", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Responsable</Form.Label>
              <Form.Control
                value={this.state.ci.responsable}
                onChange={(e) => this.setValue("responsable", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                value={this.state.ci.descripcion}
                onChange={(e) => this.setValue("descripcion", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Anexos</Form.Label>
              <Form.Control
                value={this.state.ci.anexos}
                onChange={(e) => this.setValue("anexos", e.target.value)} />
            </Form.Group>

            

            <Button id="btn-enviar" variant="primary" onClick={() => this.setState({
              confirmation: { ...this.state.confirmation, show: true },
            })}>
              Guardar Condicion Insegura
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
