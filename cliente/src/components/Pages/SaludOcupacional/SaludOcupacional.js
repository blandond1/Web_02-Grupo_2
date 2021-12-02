import React from 'react'
import NavBar6 from '../../Navbar/Navbar6'
//import SalocTable from '../../Salud_ocupacional/Saloctable'
import ColumnChart from '../../Desempeno_general/Column Chart'
import SosIndex from '../../Salud_ocupacional/sosIndex'

export default class SaludOcupacional extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div>
            
            <NavBar6 />
            <ColumnChart />
            <SosIndex />
            
        </div>
    );
}
}