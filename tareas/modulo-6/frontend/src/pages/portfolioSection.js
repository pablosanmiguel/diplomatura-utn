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
                    novedades.map(item => <NovedadItem key={item.id} title={item.titulo} subtitle={item.subtitulo} image={item.imagen} body={item.cuerpo} />)
                )}
            </div>
        </section>
    );
}

export default Portfolio;