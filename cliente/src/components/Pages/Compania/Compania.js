import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Issievoice from 'http://www.issievoice.com';

//import Login from './components/login/Login';
import NavBar from '../../Navbar/Navbar';
import NavBar2 from '../../Navbar/Navbar2';
import CompaniaPresentacion from '../Compania/companiaPresentacion';
import './compania.css';

export default class Compania extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="Compania">
               <NavBar />
                <NavBar2  />
                <CompaniaPresentacion />
                {/*<Login />*/}
                
            </div>

            
        );
    }
}





