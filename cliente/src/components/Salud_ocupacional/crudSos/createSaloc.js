import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helpers";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";

export default class Soscreate extends React.Component {
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
      .post("/so", this.state.so)
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
          <h1>Formulario Enfermedad Profesionales</h1>
        </Row>
        <Row>
          <Form>
            

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Sede</Form.Label>
              <Form.Control onChange={(e) => this.setValue("sede", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Proceso</Form.Label>
              <Form.Control onChange={(e) => this.setValue("proceso", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo Enfermedad</Form.Label>
              <Form.Control onChange={(e) => this.setValue("tipo_enfermedad", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo Trabajador</Form.Label>
              <Form.Control onChange={(e) => this.setValue("tipo_trabajador", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Validacion</Form.Label>
              <Form.Control onChange={(e) => this.setValue("validacion", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Creado Por</Form.Label>
              <Form.Control onChange={(e) => this.setValue("creado_por", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fecha", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Lider Investigacion</Form.Label>
              <Form.Control onChange={(e) => this.setValue("lider_investigacion", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Validacion Investigacion</Form.Label>
              <Form.Control onChange={(e) => this.setValue("validacion_investigacion", e.target.value)} />
            </Form.Group>

            <Button
              id="btn-enviar" variant="primary"
              onClick={() => console.log(this.guardarSos())}>
              Guardar Enfermedad Profesional
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
