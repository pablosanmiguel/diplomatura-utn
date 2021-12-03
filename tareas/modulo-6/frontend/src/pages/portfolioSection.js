import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const Portfolio = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);
    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section id="portfolio">
            <div class="section-title">
                <h2>Portfolio Programador Web Full Stack</h2>
                <p>Algunos ejemplos de trabajos realizados.</p>
            </div>
            <div class="inner-title">
                <h2>Pablo San Miguel - Analista Universitario de Sistemas</h2>
                <p>Más de 20 años de experiencia en desarrollo de aplicaciones de escritorio e incursionando en el mundo
                    de la programación web.</p>
            </div>
            <div>
                <h2>Novedades</h2>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id} title={item.titulo} subtitle={item.subtitulo} image={item.imagen} body={item.cuerpo} />)
                )}
            </div>
        </section>
    );
}

export default Portfolio;

/*
const Portfolio = () => {
    return (
        <section id="portfolio">
            <div class="section-title">
                <h2>Portfolio Programador Web Full Stack</h2>
                <p>Algunos ejemplos de trabajos realizados.</p>
            </div>
            <div class="inner-title">
                <h2>Pablo San Miguel - Analista Universitario de Sistemas</h2>
                <p>Más de 20 años de experiencia en desarrollo de aplicaciones de escritorio e incursionando en el mundo
                    de la programación web.</p>
            </div>
        </section>
    );
}

export default Portfolio;
*/