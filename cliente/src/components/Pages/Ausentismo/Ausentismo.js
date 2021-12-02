import React from 'react';
import { Container } from "react-bootstrap";
import './Ausentismo.css';
import NavBar3 from '../../Navbar/Navbar3';
//import AusTable from '../../Ausentismo/Austable';
import ColumnChart from '../../Ausentismo/Column Chart';
import Ausindex from '../../Ausentismo/ausIndex';


export default class Ausentismo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Container style={{marginLeft: 100, marginRight: 300}}>

                 <div className="Ausentismo">

                     <NavBar3 />
                     <ColumnChart />
                     <Ausindex />

                 </div>

            </Container>

        );
    }
}

