import React from 'react'
import './PaginaPrincipal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login from './components/login/Login';
import NavBar from '../../Navbar/Navbar';
import NavBar2 from '../../Navbar/Navbar2';
import Presentacion from './Presentacion';

export default class PaginaPrincipal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="PaginaPrincipal">
               <NavBar />
                <NavBar2  />
                <Presentacion />
                {/*<Login />*/}
                
            </div>

            
        );
    }
}





