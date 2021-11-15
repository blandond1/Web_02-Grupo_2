import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ausentismo from "../../Pages/Ausentismo";
import CondicionesInseguras from "../../Pages/CondicionesInseguras";
import DesempenoGeneral from "../../Pages/DesempenoGeneral";
import Incidentes from "../../Pages/Incidentes";
import Inicio from "../../Pages/Inicio";
import PaginaPrincipal from "../../Pages/PaginaPrincipal";
import SaludOcupacional from "../../Pages/SaludOcupacional";
import Login from "../login/Login";

export default function AppRouter() {
    return (

        <Router>
        
            <Switch>
                <Route path="/Ausentismo">
                    <Ausentismo />
                </Route>
                <Route path="/CondicionesInseguras">
                    <CondicionesInseguras />
                </Route>
                <Route path="/DesempenoGeneral">
                    <DesempenoGeneral />
                </Route>
                <Route path="/Incidentes">
                    <Incidentes />
                </Route>
                <Route path="/Inicio">
                    <Inicio />
                </Route>
                <Route path="/SaludOcupacional">
                    <SaludOcupacional />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>

                <Route exact path={["/", "/PaginaPrincipal"]} component={PaginaPrincipal} />
                    

                {/*<Route exact path={"/login"} component={Login} />
                <Route exact path={["/", "/home"]} component={Home} />*/}
                
                

                {/* Ruta de página no encontrada (404) */}

                <Route path={"*"} component={() => (
                    <h1 style={{ marginTop: 300 }}>
                        404
                        <br />
                        Página no encontrada
                    </h1>
                )} />
            </Switch>
        </Router>
    )
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