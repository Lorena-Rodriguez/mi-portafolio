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
    <div className='projects-container'>

        <div className='title'>
            <p className='title-text'>Proyectos Personales</p>
        </div>

        <div className='projects-line1'>
            <div className='galeria-arte'>
                <p className='text-tittle-project'>Galería de Arte</p>
                <img src={galeria} alt='galeria de arte'/>
                <img src={githubicon} className='img-icongithub' alt='github icono' />
            </div>

            <div className='oviva'>
                <p className='text-tittle-project'>Oviva</p>
                <img src={oviva} alt='galeria de arte'/>
                <img src={githubicon} className='img-icongithub' alt='github icono' />
            </div>

            <div className='ruleta'>
                <p className='text-tittle-project'>Ruleta de la Fortuna</p>
                <img src={ruleta} alt='galeria de arte'/>
                <img src={githubicon} className='img-icongithub' alt='github icono' />
            </div>

            <div className='marketplace'>
                <p className='text-tittle-project'>Marketplace</p>
                <img src={market} alt='galeria de arte'/>
                <img src={githubicon} className='img-icongithub' alt='github icono' />
            </div>


        </div >

        <div className='projects-line2'>

            <div className='to-do-list'>
                <p className='text-tittle-project'>Lista de Tareas</p>
                <img src={todolist} alt='Lista de Tareas'/>
                <img src={githubicon} className='img-icongithub' alt='github icono' />
            </div>

            <div className='landing'>
                <p className='text-tittle-project'>Landing Page</p>
                <img src={landing} alt='Landing Page'/>
                <img src={githubicon} className='img-icongithub' alt='github icono' />
            </div>

            <div className='administrador'>
                <p className='text-tittle-project'>Administrador de Listas</p>
                <img src={listas} alt='Administrador de Listas'/>
                <img src={githubicon} className='img-icongithub' alt='github icono' />
            </div>

        </div>

    </div>


    );
};

export default Projects;