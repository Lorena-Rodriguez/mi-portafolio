import React from 'react';
import '../styles/projects.css';
import galeria from '../assets/galeriadearte.svg';
import oviva from '../assets/oviva.svg';
import ruleta from '../assets/ruleta.svg';
import market from '../assets/marketplace.svg'
import githubicon from '../assets/github.svg';

function Projects () {
    return (
    <div className='projects-container'>

        <div className='title'>
            <p className='title-text'>Proyectos Personales</p>
        </div>

    <div className='projects-line1'>
        <div className='galeria-arte'>
            <p>Galería de Arte</p>
            <img src={galeria} alt='galeria de arte'/>
            <img src={githubicon} alt='github icono' />
        </div>

        <div className='oviva'>
            <p>Oviva</p>
            <img src={oviva} alt='galeria de arte'/>
            <img src={githubicon} alt='github icono' />
        </div>

        <div className='ruleta'>
            <p>Ruleta de la Fortuna</p>
            <img src={ruleta} alt='galeria de arte'/>
            <img src={githubicon} alt='github icono' />
        </div>

        <div className='marketplace'>
            <p>Marketplace</p>
            <img src={market} alt='galeria de arte'/>
            <img src={githubicon} alt='github icono' />
        </div>


    </div>


    </div>

    );
};

export default Projects;