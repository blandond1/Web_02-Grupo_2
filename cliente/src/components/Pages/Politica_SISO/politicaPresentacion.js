import React from "react";
import { Container } from "react-bootstrap";
//import Ausentismo from '../../Img/ausentismo.jpg';
//import Incidentes from '../../Img/incidentes.jpg';
//import SaludOcupacional from '../../Img/salud ocupacional.jpg';


export default class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            
            <Container style={{marginTop: 150, marginLeft: 100, marginRight:600}}>
                <div style={{ marginLeft: 150, marginRight: 150}}>
                    <h1 style={{color:"#00FFFF", marginBottom: 50}}>POLITICA SISO</h1>

                    <p style={{color:"#00FF"}}>En SIGSO tenemos el compromiso, la convicción personal y profesional de proteger la
                        seguridad y salud de todos nuestros colaboradores, contratistas, comunidades y
                        otros grupos de interés, conducimos todas nuestras actividades de una manera
                        segura, garantizando que todos regresamos a casa sanos y seguros.
                        Estamos comprometidos con la excelencia en todo lo que hacemos, la Salud y
                        Seguridad son una clara demostración del Respeto como pilar de cultura de nuestra
                        compañía; por lo tanto es parte esencial en todos los aspectos de nuestro negocio.
                        Cuando nos referimos a los resultados de la Seguridad y la Salud, tenemos la
                        convicción de que el único numero aceptable es CERO: cero accidentes, y cero
                        enfermedades ocupacionales. El logro de este objetivo es fundamental para alcanzar
                        la excelencia.
                    </p>
                </div>

            </Container>
        );
    }
}
