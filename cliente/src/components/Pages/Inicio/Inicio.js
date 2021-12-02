import React from "react";
//import { Container, Body, Row } from "react-bootstrap";
import NavBar1 from "../../Navbar/Navbar1";
import styles from "../Inicio/Inicio.module.css"



export default function Inicio() {
  return (
    <div>
        <NavBar1 />
        <div>
            <div className={styles.img1}>
                     <div className={styles.contenidoImg1}>
                         <h4>SIGSO</h4>
                         <h2 style={{color: "#5A9358"}}>
                             Sistema de Gestión e Información en Seguridad y Salud Ocupacional
                         </h2>
                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                             class="icon icon-tabler icon-tabler-map-pin"
                              width="50"
                             height="50"
                             viewBox="0 0 24 24"
                             stroke-width="1.5"
                             stroke="#ffbf00"
                            fill="none"
                             stroke-linecap="round"
                            stroke-linejoin="round">
              
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                             <circle cx="12" cy="11" r="3" />
                             <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                                 Medellin, Colombia
                    </p>

                            <a className={styles.boton} href="#contacto">
                                 Buzon de Sugerencias
                            </a>
                </div>
            </div>

            <div className={styles.contenedorSombra}>
                <h2>Información SISO</h2>

                <main className={styles.servicios}>
                    <div className={styles.servicio}>
                            <a href="../DesempenoGeneral">
                             <h1>Desempeño General</h1>
                            </a>

                        <div className={styles.iconos}>
                            <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="icon icon-tabler icon-tabler-activity"
                                 width="72"
                                 height="72"
                                 viewBox="0 0 24 24"
                                 stroke-width="1.5"
                                 stroke="#ffbf00"
                                fill="none"
                                 stroke-linecap="round"
                                 stroke-linejoin="round">
                
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 12h4l3 8l4 -16l3 8h4" />
                            </svg>
                        </div>
                            <p>
                                     Esta pagina muestra los principales indicadores de nuestro
                                     Sistema de Gestion e Información SIGSO
                            </p>
                    </div>

                    <div className={styles.servicio}>
                            <a href="../Incidentes">
                             <h1>Incidentes</h1>
                             </a>
                        <div className={styles.iconos}>
                            <svg
                             xmlns="http://www.w3.org/2000/svg"
                             class="icon icon-tabler icon-tabler-accessible"
                             width="72"
                              height="72"
                              viewBox="0 0 24 24"
                               stroke-width="1.5"
                             stroke="#ffbf00"
                              fill="none"
                             stroke-linecap="round"
                             stroke-linejoin="round">
                
                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                             <circle cx="12" cy="12" r="9" />
                             <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
                             <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
                             </svg>
                        </div>
                                    <p>
                                      Esta página muestra un listado de incidentes reportados, permite
                                      el registro de incidentes nuevos y busqueda de incidentes
                                     registrados.
                                    </p>
                    </div>

                    <div className={styles.servicio}>
                        <a href="../CondicionesInseguras">
                        <h1>Condiciones Inseguras</h1>
                        </a>
                        <div className={styles.iconos}>
                            <svg
                             xmlns="http://www.w3.org/2000/svg"
                             class="icon icon-tabler icon-tabler-radioactive"
                             width="72"
                             height="72"
                              viewBox="0 0 24 24"
                             stroke-width="1.5"
                               stroke="#ffbf00"
                             fill="none"
                             stroke-linecap="round"
                              stroke-linejoin="round">
                
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                             <path d="M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6" />
                             <path d="M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0" />
                             <path d="M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6" />
                            </svg>
                        </div>
                                <p>
                                 Esta página muestra un listado de condiciones inseguras
                                 reportadas, permite el registro de condiciones inseguras nuevas
                                 y busqueda de condiciones inseguras registrados.
                                </p>
                    </div>

                    <div className={styles.servicio}>
                            <a href="../SaludOcupacional">
                                <h1>Salud Ocupacional</h1>
                            </a>
                        <div className={styles.iconos}>
                            <svg
                               xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-report-medical"
                              width="72"
                              height="72"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#ffbf00"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round">
                
                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                             <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                             <rect x="9" y="3" width="6" height="4" rx="2" />
                             <line x1="10" y1="14" x2="14" y2="14" />
                             <line x1="12" y1="12" x2="12" y2="16" />
                            </svg>
                        </div>
                            <p>
                                 Esta página muestra un listado de casos de enfermedad
                                 profesional reportados y permite la busqueda de casos
                                 reportados.
                            </p>
                    </div>

                    <div className={styles.servicio}>
                           <a href="../Ausentismo">
                           <h1>Ausentismo</h1>
                           </a>
                        <div className={styles.iconos}>
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             class="icon icon-tabler icon-tabler-ghost"
                             width="72"
                             height="72"
                             viewBox="0 0 24 24"
                             stroke-width="1.5"
                              stroke="#ffbf00"
                             fill="none"
                             stroke-linecap="round"
                             stroke-linejoin="round">             
                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                 <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
                                 <line x1="10" y1="10" x2="10.01" y2="10" />
                                 <line x1="14" y1="10" x2="14.01" y2="10" />
                                 <path d="M10 14a3.5 3.5 0 0 0 4 0" />
                            </svg>
                        </div>
                                 <p>
                                    Esta página muestra resultados relevantes de ausentismo y
                                    permite la busqueda del tiempo reportado.
                                </p>
                    </div>
                </main>

                <div id="contacto" className={styles.contacto}>
                      <h2>Contacto</h2>

                    <form className={styles.formulario} action="#" method="POST">
                        <legend>Contactanos llenando todos los campos</legend>
                        <div className={styles.contenedorCampos}>
                            <div className={styles.campo}>
                                <label>Nombre</label>
                                <input
                                 type="text"
                                 name="nombre"
                                 placeholder="Tu Nombre"
                                 required/>
                
                            </div>

                            <div className={styles.campo}>
                                 <label>Telefono</label>
                                 <input type="tel" name="telefono" placeholder="Tu Celular" />
                            </div>

                            <div className={styles.campo}>
                                <label>Correo</label>
                                <input
                                 type="email"
                                name="correo"
                                placeholder="Tu Correo Electronico" />
                            </div>

                            <div className={styles.campo}>
                                <label>Mensaje</label>
                                <textarea></textarea>
                            </div>
                        </div>

                        <div className={styles.enviar}>
                         <input className={styles.boton} type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </div>

            <footer className={styles.footer}>
                <p>Todos los derechos reseservados</p>
                <p>2021</p>
            </footer>
        </div>
        
    </div>
  );
}
