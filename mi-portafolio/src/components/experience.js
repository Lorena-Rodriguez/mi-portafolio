import '../styles/experience.css';
import timeline from '../assets/timeline.svg';

function Experience () {
    return (

<div className='experiencecontainer' id = 'experience'>
    <div className='titleexperience'>
        <p className='title-text-experience'>Experiencia Laboral</p>
    </div>

    <div className='imgplustextcontainer'>

        <div className='imgcontainer'>
            <img src={timeline} alt='timeline' className='imgtimeline'/>
        </div>
        <div className='textcontainer'>
            <p className='blocktext'>
            <span className='bold-text'>2024 | Asociación Arrabal-AID , Factoría F5 y somos F5 | Bootcamp Desarrollo web
            FullStack</span>
            <p>He desarrollado 9 proyectos donde se han reforzado los siguientes stacks: 
            HMTL, CSS,
            Javascript, React, Localstorage, Jsonserver, MySQL, Python, Flask, API, Insomnia,
            Node, Bootstrap, Flexbox/Grid, Atomic Design, UX/UI, Git/Github, Agile, Scrum, Clean
            Code, Pair programming. Los proyectos se han realizado en grupo, cada vez con distintas personas, pudiendo
            desarrolllar Softskills diferentes, entre ellas: Comunicación efectiva, trabajo en equipo,
            resolución de problemas, adaptabilidad, gestión del tiempo, empatía.</p>
            </p>

            <p className='blocktext'>
            <span className='bold-text'>2014 - 2024 | Otros:</span>
            <p>Estudio de Oposiciones, Teleoperadora, telemarketing, azafata de congresos, camarera.</p> 
            </p>

            <p className='blocktext'>
            <span className='bold-text'>2013 - 2014 | Grupo Vértice | Autora de Contenidos</span>
            <p>Autora de libros de texto de temática de desarrollo web (HTML, CSS y JavaScript) para
            la obtención del certificado de profesionalidad.</p>
            <p>Búsqueda de información, documentación.</p>
            </p>

            <p className='blocktext'>
            <span className='bold-text'>2012 | Fotocoles | Diseñadora Gráfica</span>
            <p>Retoque fotográfico en Photoshop.</p>
            </p>

            <p className='blocktext'>
            <span className='bold-text'>2008 - 2011 | Ingenia | Productora de Contenido Multimedia</span>
            <p>Producción de cursos diseñados para distintos proyectos (Administración, legislativos,
            topografía, puericultura, etc.) realizados en HTML, CSS y Flash.</p>
            </p>
        </div>

    </div>

</div>
    );
};

export default Experience;