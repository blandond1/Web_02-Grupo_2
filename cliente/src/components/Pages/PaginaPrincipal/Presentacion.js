import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Ausentismo from "../../Img/ausentismo.jpg";
import Incidentes from "../../Img/incidentes.jpg";
import SaludOcupacional from "../../Img/salud ocupacional.jpg";
import Desempeno from "../../Img/desempeño general.jpg";
import CondicionesInseguras from "../../Img/condiciones inseguras.jpg";

export default class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container style={{marginBottom: 10}}>
                <Carousel style={{marginBottom: 10 }}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Ausentismo} alt="Ausencias" />
                        <Carousel.Caption>
                            <h3 style={{ color: "#7eb0cf" }}>Ausentismo</h3>
                            <p style={{ color: "#7eb0cf" }}>
                                Dias perdidos por incapacidad debido a incidentes o enfermedades
                                profesionales
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Incidentes} alt="Incidentes" />

                        <Carousel.Caption>
                            <h3 style={{ color: "black" }} >Incidentes y Accidentes</h3>
                            <p style={{ color: "black" }} >
                                Son los eventos que ocurren debido a las actividades laborales
                                directas e indirectas. Algunos son incapacitantes o solo
                                requieren atención medica.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={SaludOcupacional}
                            alt="Enfermedades Profesionales" />

                        <Carousel.Caption>
                            <h3 style={{ color: "#8ec5e8" }}>Enfermedades Profesionales</h3>
                            <p style={{ color: "#8ec5e8" }}>
                                Son enfermedades causadas por el ejercicio de la profesión o
                                actividad laboral debido a una condición de riesgo{" "}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Desempeno}
                            alt="Informacion General"
                        />

                        <Carousel.Caption>
                            <h3 style={{ color: "black" }}>Desempeño General</h3>
                            <p style={{ color: "black" }}>
                                Es la información del comportamiento del sistema de seguridad
                                industrial y salud en el trabajo{" "}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CondicionesInseguras}
                            alt="Condiciones Inseguras"
                        />

                        <Carousel.Caption>
                            <h3 style={{ color: "black" }}>Condiciones Inseguras</h3>
                            <p style={{ color: "black" }}>
                                {" "}
                                Son condiciones adveras en los sitios de trabajo que generan
                                riesgo de incidentes o enfermedades profesionales
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}
