import React from "react";
import { Carousel } from "react-bootstrap";
import Issiecontacto from '../../Img/issiecontacto1.png';
//import Incidentes from '../../Img/incidentes.jpg';
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
                        className="d-block w-100"
                        src={ Issiecontacto }
                        alt="Contacto"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "#00FFFF"}}>Denos sus datos y</h3>
                        <p style={{color:"#00FFFF"}}>No dude en contactarnos </p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                
            </Carousel>
        );
    }
}
