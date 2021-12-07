import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProyectoItem from '../components/proyectos/ProyectoItem';

const Portfolio = (props) => {
    const [loading, setLoading] = useState(false);
    const [proyectos, setProyectos] = useState([]);
    useEffect(() => {
        const cargarProyectos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/proyectos');
            setProyectos(response.data);
            setLoading(false);
        };
        cargarProyectos();
    }, []);

    return (
        <section id="portfolio">
            <div class="section-title">
                <h2><i class="icon-portfolio"></i> / Portfolio Programador Web Full Stack</h2>
                <p>Algunos ejemplos de trabajos realizados.</p>
            </div>
            <div className="holder1280">
                <div class="inner-title">
                    <h2>Acá podés ver algunos de mis trabajos realizados</h2>
                </div>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    proyectos.map(item => <ProyectoItem key={item.id} page={item.pagina} web_address={item.direccion_web} image={item.imagen} detail={item.detalle} />)
                )}
            </div>
        </section>
    );
}

export default Portfolio;