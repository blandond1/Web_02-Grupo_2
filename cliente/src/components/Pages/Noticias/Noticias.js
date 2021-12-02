import React from 'react'
import './noticias.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login from './components/login/Login';
import NavBar from '../../Navbar/Navbar';
import NavBar2 from '../../Navbar/Navbar2';
import NoticiasPresentacion from './noticiasPresentacion';

export default class Noticias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="Noticias">
               <NavBar />
                <NavBar2  />
                <NoticiasPresentacion />
                {/*<Login />*/}
                
            </div>

            
        );
    }
}





