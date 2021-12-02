import React from 'react';
import NavBar5 from '../../Navbar/Navbar5';
import ColumnChart from '../../Condiciones_inseguras/Column Chart';
//import ConinTable from '../../Condiciones_inseguras/Conintable';
import Cisindex from '../../Condiciones_inseguras/cisIndex';


export default class CondicionesInseguras extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div>
            <NavBar5 />
            <ColumnChart />
            <Cisindex />
        </div>
     );
    }
}