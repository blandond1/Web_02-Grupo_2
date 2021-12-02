import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helpers";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";

export default class Ciscreate extends React.Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      loading: false,
      ci: {
      observador: '',
      sede: '',
      tipo_riesgo: '',
      nivel_riesgo: '',
      fecha: '',
      responsable: '',
      descrpcion: '',
      anexos: ''

      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
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
      .post("/ci", this.state.ci)
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
      });
  }
  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab("buscar");
  }

  render() {
    return (
      <Container id="empleados-crear-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2000}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Formulario Condicion Insegura</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Observador</Form.Label>
              <Form.Control onChange={(e) => this.setValue("observador", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Sede</Form.Label>
              <Form.Control onChange={(e) => this.setValue("sede", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo Riesgo</Form.Label>
              <Form.Control onChange={(e) => this.setValue("tipo_riesgo", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nivel Riesgo</Form.Label>
              <Form.Control onChange={(e) => this.setValue("nivel_riesgo", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fecha", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Responsable</Form.Label>
              <Form.Control onChange={(e) => this.setValue("responsable", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control onChange={(e) => this.setValue("descripcion", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Anexos</Form.Label>
              <Form.Control onChange={(e) => this.setValue("anexos", e.target.value)} />
            </Form.Group>
   
            <Button
              id="btn-enviar" variant="primary"
              onClick={() => console.log(this.guardarCis())}>
              Guardar Condicion Insegura
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
