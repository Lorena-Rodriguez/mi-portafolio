import React from 'react';
import '../styles/projects.css';
import galeria from '../assets/galeriadearte.svg';
import oviva from '../assets/oviva.svg';
import ruleta from '../assets/ruleta.svg';
import market from '../assets/marketplace.svg';
import todolist from '../assets/todolist.svg';
import landing from '../assets/landing.svg';
import listas from '../assets/listas.svg';
import githubicon from '../assets/github.svg';

function Projects () {
    return (
    <div className='projects-container' id='project'>

        <div className='title'>
            <p className='title-text'>Proyectos Personales</p>
        </div>

        <div className='projects-line1'>
            <div className='galeria-arte'>
                <p className='text-tittle-project'>Galería de Arte</p>
                <img src={galeria} alt='galeria de arte'/>
                <a href='https://github.com/Lorena-Rodriguez/Galeria-del-Coleccionista' className='img-icongithub' target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt='github icono' />
                </a>
            </div>

            <div className='oviva'>
                <p className='text-tittle-project'>Oviva</p>
                <img src={oviva} alt='galeria de arte'/>
                <a href='https://github.com/Lorena-Rodriguez/Holistic-Ovaries' className='img-icongithub' target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt='github icono' />
                </a>
            </div>

            <div className='ruleta'>
                <p className='text-tittle-project'>Ruleta de la Fortuna</p>
                <img src={ruleta} alt='galeria de arte'/>
                <a href='https://github.com/Lorena-Rodriguez/Wheel-Of-Doom' className='img-icongithub' target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt='github icono' />
                </a>
            </div>

            <div className='marketplace'>
                <p className='text-tittle-project'>Marketplace</p>
                <img src={market} alt='galeria de arte'/>
                <a href='https://github.com/Lorena-Rodriguez/MarketPlaceRinconRural' className='img-icongithub' target="_blank" rel="noopener noreferrer">
                <img src={githubicon}  alt='github icono' />
                </a>
            </div>


        </div >

        <div className='projects-line2'>

            <div className='to-do-list'>
                <p className='text-tittle-project'>To Do List</p>
                <img src={todolist} alt='Lista de Tareas'/>
                <a href='https://github.com/Lorena-Rodriguez/Practica-TODO' className='img-icongithub' target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt='github icono' />
                </a>
            </div>

            <div className='landing'>
                <p className='text-tittle-project'>Landing Page</p>
                <img src={landing} alt='Landing Page'/>
                <a href='https://github.com/Lorena-Rodriguez/Grupo5' className='img-icongithub' target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt='github icono' />
                </a>
            </div>

            <div className='administrador'>
                <p className='text-tittle-project'>Administrador de Listas</p>
                <img src={listas} alt='Administrador de Listas'/>
                <a href='https://github.com/Lorena-Rodriguez/Proyecto_3' className='img-icongithub' target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt='github icono' />
                </a>
            </div>

        </div>

    </div>


    );
};

export default Projects;