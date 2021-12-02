import React from 'react';
import NavBar4 from '../../Navbar/Navbar4';
//import Incidentestable from '../../Incidentes/Incidentestable';
import ColumnChart from '../../Incidentes/Column Chart';
import IncIndex from '../../Incidentes/incIndex';

export default class Incidentes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div>     
            <NavBar4 />
            <ColumnChart />
            <IncIndex />
        </div>
         );
    }
}