import React from "react";
import { Navbar } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";

import login from "../login/Login";
import Au from "../Ausentismo/ausIndex";
import Ci from "../Condiciones_inseguras/cisIndex";
import De from "../Desempeno_general/desIndex";
import SgoDB from "../Incidentes/incIndex";
import So from "../Salud_ocupacional/sosIndex";

import PaginaPrincipal from "../Pages/PaginaPrincipal/PaginaPrincipal";
import Ausentismo from "../Pages/Ausentismo/Ausentismo";
import CreateAusentismo from "../Ausentismo/crudAus/createAusentismo";
import EditAusentismo from "../Ausentismo/crudAus/editAusentismo";
import ListAusentismo from '../Ausentismo/crudAus/listAusentismo';
import CondicionesInseguras from "../Pages/CondicionesInseguras/CondicionesInseguras";
import CreateConin from "../Condiciones_inseguras/cruCis/createConin";
import EditConin from "../Condiciones_inseguras/cruCis/editConin";
import DesempenoGeneral from "../Pages/DesempenoGeneral/DesempenoGeneral";
import Incidentes from "../Pages/Incidentes/Incidentes";
import CreateIncidente from "../Incidentes/crudInc/createIncidente";
import EditIncidente from "../Incidentes/crudInc/editIncidente";
import Inicio from "../Pages/Inicio/Inicio";
import SaludOcupacional from "../Pages/SaludOcupacional/SaludOcupacional";
import CreateSaloc from "../Salud_ocupacional/crudSos/createSaloc";
import EditSaloc from "../Salud_ocupacional/crudSos/editSaloc";
import CreateDesgen from "../Desempeno_general/crudDes/createDesgen";
import EditDesgen from "../Desempeno_general/crudDes/editDesgen";
import Compania from "../Pages/Compania/Compania";
import Noticias from "../Pages/Noticias/Noticias";
import Contacto from "../Pages/Contacto/Contacto";
import PoliticaSISO from "../Pages/Politica_SISO/PoliticaSISO";

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>

                <Route path="/compania">
                    <Compania />
                </Route> 
                <Route path="/noticias">
                    <Noticias />
                </Route> 
                <Route path="/contacto">
                    <Contacto />
                </Route> 
                <Route path="/politicaSISO">
                    <PoliticaSISO />
                </Route> 
                <Route path="/Ausentismo">
                    <Ausentismo />
                </Route>
                <Route path="/createAusentismo">
                    <CreateAusentismo />
                </Route>
                <Route path="/editAusentismo">
                    <EditAusentismo />
                </Route>
                <Route path="/listAusentismo">
                    <ListAusentismo />
                </Route>
                <Route path="/au">
                    <Au />
                </Route>
                <Route path="/CondicionesInseguras">
                    <CondicionesInseguras />
                </Route>
                <Route path="/createConin">
                    <CreateConin />
                </Route>
                <Route path="/editConin">
                    <EditConin />
                </Route>
                <Route path="/ci">
                    <Ci />
                </Route>
                <Route path="/DesempenoGeneral">
                    <DesempenoGeneral />
                </Route>
                <Route path="/createDesgen">
                    <CreateDesgen />
                </Route>
                <Route path="/editDesgen">
                    <EditDesgen />
                </Route>
                <Route path="/de">
                    <De />
                </Route>
                <Route path="/Incidentes">
                    <Incidentes />
                </Route>
                <Route path="/createIncidente">
                    <CreateIncidente />
                </Route>
                <Route path="/editIncidente">
                    <EditIncidente />
                </Route>
                <Route path="/sgoDB">
                    <SgoDB />
                </Route>
                <Route path="/SaludOcupacional">
                    <SaludOcupacional />
                </Route>
                <Route path="/createSaloc">
                    <CreateSaloc />
                </Route>
                <Route path="/editSaloc">
                    <EditSaloc />
                </Route>
                <Route path="/so">
                    <So />
                </Route>
                
                <Route path="/Inicio">
                    <Inicio />
                </Route>
                <Route exact path={["/login"]} component={login}></Route>

                <Route
                    exact
                    path={["/", "/PaginaPrincipal"]}
                    component={PaginaPrincipal} />
                   
                {/*<Route exact path={"/login"} component={Login} />
                <Route exact path={["/", "/home"]} component={Home} />*/}
                

                {/* Ruta de página no encontrada (404) */}

                <Route
                    path={"*"}
                    component={() => (
                        <h1 style={{ marginTop: 300 }}>
                            404
                            <br />
                            Página no encontrada
                        </h1>
                    )}
                />
            </Switch>
        </Router>
    );
}

/*function Home() {
    return <h2 style={{ marginTop: 200 }}>Home</h2>;
}*/

/*function About() {
return <h2>About</h2>;
}

function Users() {
return <h2>Users</h2>;
}*/
