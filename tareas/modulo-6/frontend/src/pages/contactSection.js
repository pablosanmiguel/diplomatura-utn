import { useState } from 'react';
import axios from 'axios';

const Contact = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }
    return (
        <section id="contact">
            <div class="section-title">
                <h2><i class="icon-contact"></i> / Contacto, información, presupuestos</h2>
                <p>Por cualquier consulta o solicitud de presupuesto, contactate conmigo</p>
            </div>
            <div class="inner-title">
                <h2>Pablo San Miguel - Analista Universitario de Sistemas</h2>
                <p>Más de 20 años de experiencia en desarrollo de aplicaciones de escritorio e incursionando en el mundo
                    de la programación web.</p>
            </div>
            <div className="holder">
                <div className="columna left">
                    <h2>Complete el siguiente formulario</h2>
                    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit} >
                        <p>
                            <label>Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Comentario</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
                        </p>
                        <p className="centrar"><input type="submit" value="Enviar" /></p>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;