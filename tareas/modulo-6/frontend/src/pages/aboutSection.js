import profilePic from '../components/layout/images/Pablo.jpg';
const About = () => {
    return (
        <section id="about">
            <div class="section-title">
                <h2><i class="icon-about"></i> / Diseño de Sistemas y de Páginas Web</h2>
                <p>Me llamo Pablo San Miguel y vivo en Rosario (Argentina). Durante mis más de 20 años de experiencia como desarrollador de software 
                    he realizado tareas de programación, análisis de requerimientos, maquetación de formularios, diseño de bases de datos y todo tipo de 
                    tareas relacionadas en la construcción de un sistema de computación de escritorio. En paralelo a la experiencia laboral también fui 
                    manteniéndome actualizado con las nuevas tecnologías de desarrollo de software que fueron apareciendo a lo largo de los años, 
                    mientras avanzaba con la carrera de Analista Universitario de Sistemas. A fines de 2018 conseguí el tan ansiado título y 
                    a partir de ese momento utilizo el tiempo libre para capacitarme en programación web.</p>
            </div>
            <div class="holder960">
                <div class="inner-title">
                    <h2>Pablo San Miguel - Analista Universitario de Sistemas</h2>
                    <p>Más de 20 años de experiencia en desarrollo de aplicaciones de escritorio e incursionando en el
                        mundo
                        de la programación web.</p>
                </div>
                <div class="about-picture">
                    <div class="profile-left">
                        <div class="ico"><a target="_blank" href="files/CV-Pablo.docx"><i class="icon-download"></i></a>
                        </div>
                        <h3>Descargar mi CV</h3>
                    </div>
                    <div class="profile-pic"><img src={profilePic} width="200" height="200"
                        alt="Pablo San Miguel >Diseño de Sistemas y de Páginas Web" /></div>
                    <div class="profile-right">
                        <div class="ico"><a target="_blank" class="tw" href="https://twitter.com/marceygema"><i
                            class="icon-twitter"></i></a></div>
                        <h3>Contactame</h3>
                    </div>
                </div>
                <div class="skills-info">
                    <div class="divider"><span><i class="icon-star-filled"></i></span></div>
                    <div class="skillsHolder top">
                        <div class="skills soft">
                            <h3>Soft Skills</h3>
                            <ul id="soft-skills">
                                <li>Ética de trabajo</li>
                                <li>Adaptabilidad</li>
                                <li>Capacidad analítica</li>
                                <li>Trabajo en equipo</li>
                                <li>Pensamiento crítico</li>
                                <li>Autonomía</li>
                                <li>Atención al detalle</li>
                                <li>Resilencia</li>
                            </ul>
                        </div>
                        <div class="skills more-of-me">
                            <h3>Un poco sobre mí</h3>
                            <p>Empecé a trabajar en el año 2000 en una empresa de desarrollo de software, cuando ya llevaba 5 años formándome en el ámbito académico,
                                y desde ese momento todo fue aprendizaje, evolución y capacitación para estar al día con las nuevas tecnologías de diseño y desarrollo de software.
                                El paso por diferentes empresas y trabajar para clientes de distintos rubros me dio no sólo un amplio conocimiento de diferentes negocios
                                sino también me posibilitó desarrollar la capacidad de adaptarme a las nuevas realidades para dar lo mejor de mí en cada momento.
                                Algunos de los sistemas en los que participé fueron de gestión contable, de empresas y comercios en general, de trading algorítmico,
                                mutual de salud y broker de seguros.</p>
                        </div>
                    </div>
                </div>
                <div class="about-info">
                    <div class="divider"><span><i class="icon-star-filled"></i></span></div>
                    <div class="inner-title">
                        <h2> Informacion de Contacto Programador web</h2>
                        <p>Diferentes maneras de contactar conmigo para trabajar juntos.</p>
                    </div>
                    <div class="infoHolder top">
                        <div class="address">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Rosario (Argentina)</p>
                        </div>
                        <div class="info">
                            <ul>
                                <li>
                                    <div class="ico"><i class="far fa-envelope"></i></div>
                                    <p>Email : pablosanmiguel.psm@gmail.com </p>
                                </li>
                                <li>
                                    <div class="ico"><i class="fas fa-mobile-alt"></i></div>
                                    <p>Tel : (+ 54) 9 341 6137190</p>
                                </li>
                                <li>
                                    <div class="ico"><i class="fas fa-link"></i></div>
                                    <p>Web : <a href="http://www.pablosanmiguel.com.ar">pablosanmiguel.com.ar</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;