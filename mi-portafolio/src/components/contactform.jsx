import '../styles/contactform.css';
import { useState } from 'react';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const initialState = {
        nombre: "",
        apellidos: "",
        empresa: "",
        asunto: "",
        mensaje: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [mensajeEnviado, setMensajeEnviado] = useState(false);
    
        const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
        
    // Configuración de EmailJS

    const serviceID = "service_u56h50k"; 
    const templateID = "template_mhs1npu";
    const publicKey = "NslgSk8WfS_kY8AGX";

    emailjs
        .send(serviceID, templateID, formData, publicKey)
        .then(() => {
        console.log("Correo enviado con éxito");
        setMensajeEnviado(true);
        setFormData(initialState);
        })
        .catch((error) => {
        console.error("Error al enviar el correo:", error);
        });

        if (mensajeEnviado) {
        setFormData(initialState);
    }

    };






    return (
<div id='contactform'>
        <div className='titleblockcontact'>
        <p className='titletextcontact'>Contacto</p>
    </div>

        <div className='formcontainer'>

        <form onSubmit={handleSubmit} className='form'>
        {mensajeEnviado && <p >✅ Mensaje enviado con éxito.</p>}
        <div className='inputsblocks'>
        <label >Nombre:</label>
        <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className='inputsclass'
        />
        </div>
        <div className='inputsblocks'>
        <label >Apellidos:</label>
        <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            className='inputsclass'
        />
        </div>

        <div className='inputsblocks'>
        <label >Empresa:</label>
        <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className='inputsclass'
        />
        </div>

        <div className='inputsblocks'>
        <label >Asunto:</label>
        <input
            type="text"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            className='inputsclass'
        />
        </div>

        <div className='inputsblocks'>
        <label >Mensaje:</label>
        <textarea 
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className='inputsclass'
        />
        </div>

        <div className='buttonformblock'>
        <button type="submit" className='buttonform' >
            Enviar
        </button>
        </div>

        </form>
        </div>
        </div>
    );
}

export default ContactForm;