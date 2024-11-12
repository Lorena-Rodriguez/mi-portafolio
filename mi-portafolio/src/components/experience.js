import '../styles/experience.css';
import timeline from '../assets/timeline.svg';

function Experience () {
    return (

<div className='experiencecontainer'>
    <div>
        <p>Experiencia Laboral</p>
    </div>

    <div>

        <div className='imgcontainer'>
            <img src={timeline} alt='timeline' className='imgtimeline'/>
        </div>
        <div className='textcontainer'>
            <p>
            2023 - 2024 | Asociación Arrabal-AID , Factoría F5 y somos F5 | Bootcamp Desarrollo web
            FullStack
            He desarrollado 9 proyectos donde se han reforzado los siguientes stacks: 
            HMTL, CSS,
            Javascript, React, Localstorage, Jsonserver, MySQL, Python, Flask, API, Insomnia,
            Node, Bootstrap, Flexbox/Grid, Atomic Design, UX/UI, Git/Github, Agile, Scrum, Clean
            Code, Pair programming. Los proyectos se han realizado en grupo, cada vez con distintas personas, pudiendo
            desarrolllar Softskills diferentes, entre ellas: Comunicación efectiva, trabajo en equipo,
            resolución de problemas, adaptabilidad, gestión del tiempo, empatía.
            </p>

            <p>
            2014 - 2024 | Otros: Estudio de Oposiciones, Teleoperadora, telemarketing, azafata de congresos, camarera.
            </p>

            <p>
            2013 - 2014 | Grupo Vértice | Autora de Contenidos
            Autora de libros de texto de temática de desarrollo web (HTML, CSS y JavaScript) para
            la obtención del certificado de profesionalidad.
            Búsqueda de información, documentación.
            </p>

            <p>
            2012 | Fotocoles | Diseñadora Gráfica
            Retoque fotográfico en Photoshop.
            </p>

            <p>
            2008 - 2011 | Ingenia | Productora de Contenido Multimedia
            Producción de cursos diseñados para distintos proyectos (Administración, legislativos,
            topografía, puericultura, etc.) realizados en HTML, CSS y Flash.
            </p>
        </div>

    </div>

</div>
    );
};

export default Experience;