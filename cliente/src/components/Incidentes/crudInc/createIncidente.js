import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helpers";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";

export default class Inccreate extends React.Component {
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
      sgoDB: {

        nombre: '',
        apellido: '',
        fecha: '',
        sede: '',
        creador: '',
        proceso: '',
        validacion: '',
        descripcionIncidente: '',
        investigadorLider: '',
        severidad: '',
        tipoIncidente: '',
        tipoTrabajador: '',
        validacionInvestigacion: '',
        diasPerdidos: '',
        date: '',
        activo: ''
  
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }
  setValue(index, value) {
    this.setState({
      sgoDB: {
        ...this.state.sgoDB,
        [index]: value,
      },
    });
  }

  guardarInc() {
    this.setState({ loading: true });
    request
      .post("/sgoDB", this.state.sgoDB)
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
          <h1>Formulario Informacion Incidentes</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>nombre</Form.Label>
              <Form.Control onChange={(e) => this.setValue("nombres", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>apellido</Form.Label>
              <Form.Control onChange={(e) => this.setValue("apellido", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>fecha</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fecha", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Sede</Form.Label>
              <Form.Control onChange={(e) => this.setValue("sede", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>creador</Form.Label>
              <Form.Control onChange={(e) => this.setValue("creador", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>proceso</Form.Label>
              <Form.Control onChange={(e) => this.setValue("proceso", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>validacion</Form.Label>
              <Form.Control onChange={(e) => this.setValue("validacion", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>descripcionIncidente</Form.Label>
              <Form.Control onChange={(e) => this.setValue("descripcionIncidente", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>investigadorLider</Form.Label>
              <Form.Control onChange={(e) => this.setValue("investigadorLider", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>severidad</Form.Label>
              <Form.Control onChange={(e) => this.setValue("severidad", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>tipoIncidente</Form.Label>
              <Form.Control onChange={(e) => this.setValue("tipoIncidente", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>tipoTrabajador</Form.Label>
              <Form.Control onChange={(e) => this.setValue("tipoTrabajador", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>validacionInvestigacion</Form.Label>
              <Form.Control onChange={(e) => this.setValue("validacionInvestigacion", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>diasPerdidos</Form.Label>
              <Form.Control onChange={(e) => this.setValue("diasPerdidos", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>date</Form.Label>
              <Form.Control onChange={(e) => this.setValue("date", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>activo</Form.Label>
              <Form.Control onChange={(e) => this.setValue("activo", e.target.value)} />
            </Form.Group>


            <Button
              id="btn-enviar" variant="primary"
              onClick={() => console.log(this.guardarInc())}>
              Guardar Incidente
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}