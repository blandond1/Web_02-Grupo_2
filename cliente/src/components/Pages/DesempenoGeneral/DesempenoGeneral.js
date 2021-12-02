import React from 'react'
import NavBar7 from '../../Navbar/Navbar7'
//import DesgenTable from '../../Desempeno_general/Desgentable'
import ColumnChart from '../../Desempeno_general/Column Chart'
import DesIndex from '../../Desempeno_general/desIndex'
//import Desgendashboard from '../../Desempeno_general/Desgendashboard'

export default class DesempenoGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div>
           
            <NavBar7 />
            <ColumnChart />
            <DesIndex />
        </div>
     );
    }
}