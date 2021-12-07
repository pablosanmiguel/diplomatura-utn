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
                <p>Si querés pedir un presupuesto personalizado o realizar cualquier consulta te podés contactar conmigo
                    llenando el formulario que aparece abajo, e intentaré responder lo antes posible.</p>
            </div>
            <div class="inner-title">
                <h3>Completá tus datos</h3>
            </div>
            <div className="contact-form holder960">
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit} >
                    <div class="name">
                        <label for="nombre"></label>
                        <input type="text" placeholder="Nombre y Apellido" name="nombre" value={formData.nombre} onChange={handleChange} required autoComplete="off" />
                    </div>
                    <div class="telephone">
                        <label for="telefono"></label>
                        <input type="text" placeholder="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} required autoComplete="off" />
                    </div>
                    <div class="email">
                        <label for="email"></label>
                        <input type="email" placeholder="E-Mail" name="email" value={formData.email} onChange={handleChange} required autoComplete="off" />
                    </div>
                    <div class="message">
                        <label for="mensaje"></label>
                        <textarea name="mensaje" placeholder="Comentario" value={formData.mensaje} onChange={handleChange} cols="30" rows="5" required></textarea>
                    </div>
                    <div class="submit">
                        <input type="submit" value="Enviar" id="contact-send" />
                    </div>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </form>
            </div>
        </section>
    );
}

export default Contact;