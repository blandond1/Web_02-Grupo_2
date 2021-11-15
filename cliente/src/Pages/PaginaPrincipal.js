import React from 'react'
import './PaginaPrincipal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login from './components/login/Login';
//import NavBar from './components/Navbar/Navbar';//
import NavBar2 from '../components/Navbar/Navbar2';

export default function PaginaPrincipal() {
    return (

        <div className="PaginaPrincipal">
            <h1 style={{ marginTop: 50 }}>Pagina Principal</h1>
            {/*<NavBar />*/}
            <NavBar2 />
            {/*<AppRouter />*/}
            {/*<Login />*/}

        </div>
    )
}



/*import AppRouter from './components/Router/Router';*/

/*function App() {
  return (

  );
}

export default App;*/