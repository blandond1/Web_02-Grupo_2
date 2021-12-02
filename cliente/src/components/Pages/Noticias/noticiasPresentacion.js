import React from "react";
import { Carousel } from "react-bootstrap";
import Noticia1 from '../../Img/issienoticia1.png';
import Noticia2 from '../../Img/issienoticia2.png';
//import SaludOcupacional from '../../Img/salud ocupacional.jpg';
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
                        src={ Noticia1 }
                        alt="Noticias"
                    />
                    <Carousel.Caption>
                        <h3 style= {{color:"#00FFFF"}}>Comunicaciones</h3>
                        <p style= {{color:"#00FFFF"}}>Somos un Equipo creativo y tecnologico al servicio de sus necesidades de comunicación y software</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-51"
                        src={ Noticia2 }
                        alt="Noticias"
                    />

                    <Carousel.Caption>
                        <h3 style= {{color:"#00FFFF"}}>Capacidad 2021</h3>
                        <p style= {{color:"#00FFFF"}}>Hasta el momento tenemos mas de 120 clientes en 161 proyectos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-51"
                        src={ Noticia1 }
                        alt="Noticias"
                    />

                    <Carousel.Caption>
                        <h3 style= {{color:"#00FFFF"}}>Comunicaciones</h3>
                        <p style= {{color:"#00FFFF"}}>Somos un Equipo creativo y tecnologico al servicio de sus necesidades de comunicación y software </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
