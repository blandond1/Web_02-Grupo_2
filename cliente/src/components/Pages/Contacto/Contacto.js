import React from 'react'
import './contacto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login from './components/login/Login';
import NavBar from '../../Navbar/Navbar';
import NavBar2 from '../../Navbar/Navbar2';
import ContactoPresentacion from './contactoPresentacion';

export default class Contacto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="PaginaPrincipal">
               <NavBar />
                <NavBar2  />
                <ContactoPresentacion />
                {/*<Login />*/}
                
            </div>

            
        );
    }
}





