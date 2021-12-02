import React from "react";
import { Carousel } from "react-bootstrap";
import Issiecompania2 from '../../Img/issiecompania2.png';
//import Incidentes from '../../Img/incidentes.jpg';
import Issiecompania1 from '../../Img/issiecompania1.png';
//import Issievoice from 'http://www.issievoice.com';


export default class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-51"
                        src= {Issiecompania1}
                        alt="Telefonia"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "#00FFFF"}}>ISSIEVOICE TELEFONÍA</h3>
                        <p style={{color: "#7DF9FF"}}>Telefonía Digital - Empresa TIC de Telecoomunicaciones, </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-51"
                        src={ Issiecompania2 }
                        alt="Software"
                    />

                    <Carousel.Caption>
                        <h3 style={{color: "#7DF9FF"}}>ISSIEVOICE - SOFTWARE</h3>
                        <p style={{color: "#7DF9FF"}}>Diseño e Implementación de Paginas WEB,  Software de Trabajo Digital para Empresas y Reconversión Software Obsoleto</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-51"
                        src={ Issiecompania1 }
                        alt="Telefonia"
                    />

                    <Carousel.Caption>
                        <h3 style={{color: "#7DF9FF"}}>ISSIEVOICE TELEFONÍA</h3>
                        <p style={{color:"#7DF9FF"}}>Telefonía Digital - Empresa TIC de Telecoomunicaciones </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
