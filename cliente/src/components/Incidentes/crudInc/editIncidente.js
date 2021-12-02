import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helpers";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationProps from "../../prompts/confirmation";

export default class IncEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idIn: this.props.getIdIn(),
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
      in: {
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
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {
    this.getIn();
  }
  getAu() {
    this.setState({ loading: true });
    request
      .get(`/sgoDB/${this.state.idAu}`)
      .then((response) => {
        this.setState({
          In: response.data,
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
      in: {
        ...this.state.in,
        [index]: value,
      },
    });
  }
  guardarInc() {
    this.setState({ loading: true });
    request
      .put(`/sgoDB/${this.state.idAu}`, this.state.au)
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
      this.guardarInc()
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
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                value={this.state.in.nombre}
                onChange={(e) => this.setValue("nombre", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                value={this.state.in.apellido}
                onChange={(e) => this.setValue("apellido", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                value={this.state.in.fecha}
                onChange={(e) => this.setValue("fecha", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Sede</Form.Label>
              <Form.Control
                value={this.state.in.sede}
                onChange={(e) => this.setValue("sede", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Creador</Form.Label>
              <Form.Control
                value={this.state.in.creador}
                onChange={(e) => this.setValue("creador", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Proceso</Form.Label>
              <Form.Control
                value={this.state.in.proceso}
                onChange={(e) => this.setValue("proceso", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Validacion</Form.Label>
              <Form.Control
                value={this.state.in.validacion}
                onChange={(e) => this.setValue("validacion", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripcion Incidente</Form.Label>
              <Form.Control
                value={this.state.in.descripcionIncidente}
                onChange={(e) => this.setValue("descripcionIncidente", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Investigador Lider</Form.Label>
              <Form.Control
                value={this.state.in.investigadorLider}
                onChange={(e) => this.setValue("investigadorLider", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Severidad</Form.Label>
              <Form.Control
                value={this.state.in.severidad}
                onChange={(e) => this.setValue("severidad", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo Incidente</Form.Label>
              <Form.Control
                value={this.state.in.tipoIncidente}
                onChange={(e) => this.setValue("tipoIncidente", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo Trabajador</Form.Label>
              <Form.Control
                value={this.state.in.tipoTrabajador}
                onChange={(e) => this.setValue("tipoTrabajador", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Validacion Investigacion</Form.Label>
              <Form.Control
                value={this.state.in.validacionInvestigacion}
                onChange={(e) => this.setValue("validacionInvestigacion", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Dias Perdidos</Form.Label>
              <Form.Control
                value={this.state.in.diasPerdidos}
                onChange={(e) => this.setValue("diasPerdidos", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Date</Form.Label>
              <Form.Control
                value={this.state.in.date}
                onChange={(e) => this.setValue("date", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Activo</Form.Label>
              <Form.Control
                value={this.state.in.activo}
                onChange={(e) => this.setValue("activo", e.target.value)} />
            </Form.Group>
            

           

            <Button id="btn-enviar" variant="primary" onClick={() => this.setState({
              confirmation: { ...this.state.confirmation, show: true },
            })}>
              Guardar Incidente
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
