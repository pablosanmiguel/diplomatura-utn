import profilePic from '../components/layout/images/Pablo.jpg';
const About = () => {
    return (
        <section id="about">
            <div class="section-title">
                <h2>Diseño de Sistemas y de Páginas Web</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil deleniti a, maiores rerum enim
                    amet hic nobis odit, dignissimos delectus veritatis cupiditate iure necessitatibus voluptatum
                    tempore porro? Odio, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem
                    voluptatem sed blanditiis eveniet quaerat accusantium maxime rerum eligendi quo cupiditate
                    repudiandae aliquid sunt voluptatum nobis, placeat rem natus minima!</p>
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
                    <div class="inner-title">
                        <h2> Principales Habilidades como Desarrollador Web</h2>
                        <p>"La experiencia es un grado." ...desde 2005</p>
                    </div>
                    <div class="skillsHolder top">
                        <div class="skills hard">
                            <h3>Hard Skills</h3>
                            <ul id="hard-skills">
                                <li>Habilidad 1</li>
                                <li>Habilidad 2</li>
                                <li>Habilidad 3</li>
                                <li>Habilidad 4</li>
                                <li>Habilidad 5</li>
                            </ul>
                        </div>
                        <div class="skills soft">
                            <h3>Soft Skills</h3>
                            <ul id="soft-skills">
                                <li>Habilidad 1</li>
                                <li>Habilidad 2</li>
                                <li>Habilidad 3</li>
                                <li>Habilidad 4</li>
                                <li>Habilidad 5</li>
                            </ul>
                        </div>
                        <div class="skills more-of-me">
                            <h3>Un poco más sobre mí</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore quaerat
                                cupiditate sed tempore vel porro. Totam labore enim explicabo ullam optio porro quas
                                neque adipisci inventore officia, blanditiis est. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Praesentium voluptas libero consequatur, cumque sint dolorem ipsam id
                                quasi, expedita placeat debitis. Sequi quidem rerum magnam possimus delectus! Facilis,
                                nobis possimus!</p>
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
                        <div class="address"><i class="icon-location"></i>
                            <p>Rosario (Argentina)</p>
                        </div>
                        <div class="info">
                            <ul>
                                <li>
                                    <div class="ico"><i class="icon-mail"></i></div>
                                    <p>Email : pablosanmiguel.psm@gmail.com </p>
                                </li>
                                <li>
                                    <div class="ico"><i class="icon-phone"></i></div>
                                    <p>Tel : (+ 54) 9 341 6137190</p>
                                </li>
                                <li>
                                    <div class="ico"><i class="icon-link"></i></div>
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