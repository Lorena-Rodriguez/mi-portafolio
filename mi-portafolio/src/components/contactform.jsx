import '../styles/contactform.css';
import { useState } from 'react';

function ContactForm () {
    const initialState = {
        nombre: "",
        apellidos: "",
        empresa: "",
        asunto: "",
        mensaje: "",
        };
        const [formData, setFormData] = useState(initialState);
        const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
        // Aquí puedes integrar EmailJS o enviarlo a un backend

        setFormData(initialState);

        };
    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
        <label className="block mb-2">Nombre:</label>
        <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
        />

        <label className="block mb-2">Apellidos:</label>
        <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
        />

        <label className="block mb-2">Empresa:</label>
        <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
        />

        <label className="block mb-2">Asunto:</label>
        <input
            type="text"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
        />

        <label className="block mb-2">Mensaje:</label>
        <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            rows="4"
        />

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Enviar
        </button>
        </form>
    );
};

export default ContactForm;