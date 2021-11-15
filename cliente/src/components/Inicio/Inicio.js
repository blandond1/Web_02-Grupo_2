import React from "react";
import { Container, Body, Div, Main, Footer, H1, H2, H4, P, Form, Label, Path, Svg, Circle, Rect, Line, Legend, Input, Textarea } from "react-bootstrap";

export default class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container>
                <Body>
                    <Div clas="nav-bg">
                        <nav class="navegacion-principal">
                            <a href="#">Compañia</a>
                            <!-- esto quiere decir que aqui aparecerá el nombre del a compañía? o es algo relacionado a nuestra compañia-->
                            <a href="#">Noticias</a>
                            <a href="#">Politica SISO</a>
                            <a href="#">Contacto</a>
                            <a href="#">Contacto2</a>
                        </nav>
                    </Div>

                    <Div class="img1">
                        <Div class="contenido-img1">
                            <H4>SIGISS</H4>
                            <H2>
                                Sistema de Gestión e Información en Seguridad y Salud Ocupacional
                            </H2>
                            <P>
                                <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="50"
                                    height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <Circle cx="12" cy="11" r="3" />
                                    <Path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </Svg>
                                Medellin, Colombia
                            </P>

                            <A class="boton" href="#contacto">Buzon de Sugerencias</A>
                        </Div>
                    </Div>

                    <Div class="contenedor sombra">
                        <H2>Información SISO</H2>

                        <Main class="servicios">
                            <Div class="servicio">
                                <A href="/desempeno_general/index.html">
                                    <H1>Desempeño General</H1>
                                </A>

                                <Div class="iconos">
                                    <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-activity" width="72"
                                        height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <Path d="M3 12h4l3 8l4 -16l3 8h4" />
                                    </Svg>
                                </Div>
                                <P>
                                    Esta pagina muestra los principales indicadores de nuestro Sistema
                                    de Gestion e Información SISO (SIGSO)
                                </P>
                            </Div>

                            <Div class="servicio">
                                <A href="/incidentes/index.html">
                                    <H1>Incidentes</H1>
                                </A>
                                <Div class="iconos">
                                    <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-accessible" width="72"
                                        height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <Circle cx="12" cy="12" r="9" />
                                        <Path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
                                        <Circle cx="12" cy="7.5" r=".5" fill="currentColor" />
                                    </Svg>
                                </Div>
                                <P>
                                    Esta página muestra un listado de incidentes reportados, permite el
                                    registro de incidentes nuevos y busqueda de incidentes registrados.
                                </P>
                            </Div>

                            <Div class="servicio">
                                <A href="/condiciones_inseguras/index.html">
                                    <H1>Condiciones Inseguras</H1>
                                </A>
                                <Div class="iconos">
                                    <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-radioactive" width="72"
                                        height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <Path d="M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6" />
                                        <Path d="M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0" />
                                        <Path d="M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6" />
                                    </Svg>
                                </Div>
                                <P>
                                    Esta página muestra un listado de condiciones inseguras reportadas,
                                    permite el registro de condiciones inseguras nuevas y busqueda de
                                    condiciones inseguras registrados.
                                </P>
                            </Div>

                            <Div class="servicio">
                                <A href="/salud_ocupacional/index.html">
                                    <H1>Salud Ocupacional</H1>
                                </A>
                                <Div class="iconos">
                                    <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-report-medical"
                                        width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <Path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                        <Rect x="9" y="3" width="6" height="4" rx="2" />
                                        <Line x1="10" y1="14" x2="14" y2="14" />
                                        <Line x1="12" y1="12" x2="12" y2="16" />
                                    </Svg>
                                </Div>
                                <P>
                                    Esta página muestra un listado de casos de enfermedad profesional
                                    reportados y permite la busqueda de casos reportados.
                                </P>
                            </Div>

                            <Div class="servicio">
                                <A href="/ausentismo/index.html">
                                    <H1>Ausentismo</H1>
                                </A>
                                <Div class="iconos">
                                    <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ghost" width="72"
                                        height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <Path
                                            d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
                                        <Line x1="10" y1="10" x2="10.01" y2="10" />
                                        <Line x1="14" y1="10" x2="14.01" y2="10" />
                                        <Path d="M10 14a3.5 3.5 0 0 0 4 0" />
                                    </Svg>
                                </Div>
                                <P>
                                    Esta página muestra resultados relevantes de ausentismo y permite la
                                    busqueda del tiempo reportado.
                                </P>
                            </Div>
                        </Main>

                        <Div id="contacto" class="contacto">
                            <H2>Contacto</H2>

                            <Form class="formulario" action="#" method="POST">
                                <Legend>Contactanos llenando todos los campos</Legend>
                                <Div class="contenedor-campos">
                                    <Div class="campo">
                                        <Label>Nombre</Label>
                                        <Input type="text" name="nombre" placeholder="Tu Nombre" required />
                                    </Div>

                                    <Div class="campo">
                                        <Label>Telefono</Label>
                                        <Input type="tel" name="telefono" placeholder="Tu Celular" />
                                    </Div>

                                    <Div class="campo w-100">
                                        <Label>Correo</Label>
                                        <Input type="email" name="correo" placeholder="Tu Correo Electronico" />
                                    </Div>

                                    <Div class="campo w-100">
                                        <Label>Mensaje</Label>
                                        <Textarea></Textarea>
                                    </Div>
                                </Div>

                                <Div class="enviar">
                                    <Input class="boton" type="submit" value="Enviar" />
                                </Div>
                            </Form>
                        </Div>
                    </Div>

                    <Footer class="footer">
                        <P>Todos los derechos reseservados</P>
                        <P>2021</P>
                    </Footer>
                </Body>
            </Container>
        );
    }
}