import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helpers";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";

export default class Descreate extends React.Component {
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
      de: {
      dias_seguros: '',
      dias: '',
      indice_frecuencia: '',
      indice_severidad: '',
      sede: '',
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
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
      .post("/de", this.state.de)
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
          <h1>Formulario Informacion Desempeño</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Dias Seguros</Form.Label>
              <Form.Control onChange={(e) => this.setValue("dias_seguros", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Dias</Form.Label>
              <Form.Control onChange={(e) => this.setValue("dias", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Indice Frecuencia</Form.Label>
              <Form.Control onChange={(e) => this.setValue("indice_frecuencia", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Indice Severidad</Form.Label>
              <Form.Control onChange={(e) => this.setValue("indice_severidad", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Sede</Form.Label>
              <Form.Control onChange={(e) => this.setValue("sede", e.target.value)} />
            </Form.Group>
   
            <Button
              id="btn-enviar" variant="primary"
              onClick={() => console.log(this.guardarDes())}>
              Guardar Información Desempeño
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}