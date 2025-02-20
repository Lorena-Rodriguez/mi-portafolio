import React from 'react';
import '../styles/home.css';
import myPhoto from '../assets/foto.svg'

function Home () {
    return (

            <div className='home' id='home'>
                <div className='fotoNameButtons'>

                    <div className='photoBox'>
                    <img src={myPhoto} alt='Una foto de mí' className='myPhoto' />
                    </div>

                    <div className='buttonsText'>

                    <div className='buttons-home-box'>
                    <a href='https://www.linkedin.com/in/lorenarodriguezcortes/' className='buttons-home'  target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href='https://github.com/Lorena-Rodriguez' className='buttons-home'  target="_blank" rel="noopener noreferrer">Github</a>
                    <a href='/cv2024.pdf' className='buttons-home'  target="_blank" rel="noopener noreferrer">CV</a>
                    <a href='#contactform' className='buttons-home' rel="noopener noreferrer">Contacto</a>
                    </div>

                    <div className='textBox'>
                    <p>¡Hola!</p>
                    <p>Soy Lorena Rodríguez.</p>
                    </div>
                    
                    </div>

                </div>

                <div className='presentation'>
                    <p className='presentation-text'>
                    Tras mi experiencia en la Maquetación Web doy un vuelco a mi carrera hacia el Desarrollo Web, 
                    especializándome en Frontend (HTML5, CSS3, JavaScript, React). Actualmente me formo de manera 
                    autodidacta continuamente. Me considero una persona detallista y creativa, que se adapta bien 
                    en equipo, muy constante y comprometida con su trabajo.
                    </p>
                </div>
                
            </div>
    );
};

export default Home;