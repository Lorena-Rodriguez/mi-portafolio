import React from 'react';
import '../styles/home.css';
import myPhoto from '../assets/foto.svg'

function Home () {
    return (

            <div className='home'>
                <div className='fotoAndName'>

                    <div className='photoBox'>
                    <img src={myPhoto} alt='Una foto de mí' className='myPhoto' />
                    </div>

                    <div className='textBox'>
                    <p>¡Hola!</p>
                    <p>Soy Lorena Rodríguez.</p>
                    </div>
                    
                </div>

                <div className='presentation'>
                    <p className='presentation-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec erat lacus. 
                Suspendisse volutpat ultrices pretium. Etiam interdum id quam a bibendum. 
                Sed tristique maximus leo, eget rutrum tortor. Proin at eros mi. 
                Praesent sem lorem, luctus sed ullamcorper non, blandit at arcu. 
                Quisque et mollis purus.Morbi fringilla fermentum ornare. Donec ut 
                tellus bibendum, placerat neque at, elementum leo. Fusce id justo 
                    </p>
                </div>
                
            </div>
    );
};

export default Home;